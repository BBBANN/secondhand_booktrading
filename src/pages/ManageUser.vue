<template>
  <div id="manageUser">
    <div class="manageUserHead">
      <el-button type="default" @click="showAllUserList"> 展示全部 </el-button>

      <el-button class="drawerBtn" @click="handleSearch" type="primary">
        搜索一下
      </el-button>
    </div>

    <!-- 搜索表单 start -->
    <el-drawer
      title="搜索用户"
      :visible.sync="drawer"
      :direction="direction"
      :before-close="handleClose"
      size="25%"
    >
      <div class="searchForm">
        <el-form
          ref="form"
          :model="searchForm"
          label-width="80px"
          label-position="left"
        >
          <el-form-item label="用户id">
            <el-input
              v-model="searchForm.userId"
              placeholder="请输入用户id"
            ></el-input>
          </el-form-item>
          <el-form-item label="用户名">
            <el-input
              v-model="searchForm.userName"
              placeholder="请输入用户名"
            ></el-input>
          </el-form-item>
          <div class="submitSearch">
            <el-button type="primary" @click="handleConfirm">确定</el-button>
            <el-button @click="handleCancer">取消</el-button>
          </div>
        </el-form>
      </div>
    </el-drawer>
    <!-- 搜索表单 end -->
    <!-- 表格 start -->
    <el-table
      :data="tempUserList"
      stripe
      style="width: 100%"
      height="766"
      border
    >
      <el-table-column prop="userId" label="用户id"> </el-table-column>
      <el-table-column prop="userName" label="用户名"> </el-table-column>
      <el-table-column prop="isAdmin" label="是否是管理员"> </el-table-column>
      <el-table-column label="操作" width="300px">
        <template slot-scope="scope">
          <el-button
            class="deleteBtn"
            size="mini"
            type="danger"
            plain
            @click="handleDelete(scope)"
            >删除</el-button
          >
        </template>
      </el-table-column>
    </el-table>
    <!-- 表格 end -->
    <!-- 分页 start -->
    <div class="pagination">
      <el-pagination
        background
        layout="prev, pager, next"
        :total="searchedUserList.length"
        :current-page="currentPage"
        :page-size="pageSize"
        @current-change="handleCurrentChange"
      >
      </el-pagination>
    </div>
    <!-- 分页 end -->
  </div>
</template>

<script>
import { Message } from "element-ui";
import { getUserList, deleteUser } from "../api";
export default {
  name: "ManageUser",
  data() {
    return {
      drawer: false,
      direction: "rtl",
      searchForm: {
        userName: "",
        userId: "",
        isAdmin: "",
      },
      tempUserList: [],
      currentPage: 1,
      pageSize: 15,
      userList: [
        {
          userName: "1",
          userId: 5,
          isAdmin: "是",
        },
        {
          userName: "1",
          userId: 5,
          isAdmin: "否",
        },
        {
          userName: "1",
          userId: 5,
          isAdmin: true,
        },
        {
          userName: "1",
          userId: 5,
          isAdmin: true,
        },
        {
          userName: "1",
          userId: 5,
          isAdmin: true,
        },
      ],
    };
  },
  methods: {
    getUsers() {
      getUserList().then((val) => {
        this.userList = val.data;
      });
    },
    handleClose(done) {
      done();
    },
    showAllUserList() {
      this.searchForm = {
        userId: "",
        userName: "",
        isAdmin: "",
      };
      this.tempUserList = this.userList.slice();
      this.getData();
    },
    handleDelete(scope) {
      deleteUser(scope.row.userId);
      this.getUsers();
      this.tempUserList = this.userList;
      this.getData();
    },
    handleSearch() {
      this.drawer = true;
    },
    handleConfirm() {
      this.drawer = false;
      this.tempUserList = this.searchedUserList;
      Message({
        message: "查询成功！",
        type: "success",
      });
      this.getData();
    },
    handleCancer() {
      this.searchForm = {
        userId: "",
        userName: "",
        isAdmin: "",
      };
      this.drawer = false;
    },
    handleCurrentChange(page) {
      this.currentPage = page;
      this.getData();
    },
    getData() {
      const startIndex = (this.currentPage - 1) * this.pageSize;
      const endIndex = startIndex + this.pageSize - 1;
      const newData = this.searchedUserList.slice(startIndex, endIndex + 1);
      this.tempUserList = newData;
    },
  },
  computed: {
    searchedUserList: {
      get() {
        return this.userList.filter((item) => {
          let contion =
            (this.searchForm.userName == "" ||
              item.userName == this.searchForm.userName) &&
            (this.searchForm.userId == "" ||
              item.userId == this.searchForm.userId) &&
            (this.searchForm.isAdmin == "" ||
              item.isAdmin == this.searchForm.isAdmin);
          if (contion) {
            return item;
          }
        });
      },
    },
  },
  mounted() {
    getUserList().then((val) => {
      this.userList = val.data;
      this.tempUserList = val.data;
      this.getData();
    });
  },
};
</script>

<style scoped lang="less">
#manageUser {
  .manageUserHead {
    display: flex;
    justify-content: space-between;
    height: 40px;
    .drawerBtn {
      margin-right: 38px;
    }
  }
  .searchForm {
    padding: 0 30px;
    height: 100%;
    .el-input {
      max-width: 300px;
    }
    .line {
      height: 40px;
      overflow: hidden;
    }
  }
  .el-table {
    margin-top: 30px;
  }
  .deleteBtn {
    margin-left: 10px;
  }
  .submitSearch {
    display: flex;
    justify-content: space-between;
    margin-top: 650px;
    .el-button {
      flex: 50%;
      margin: 0 10px;
    }
  }
  .pagination {
    margin-top: 30px;
    position: relative;
    .el-pagination {
      position: absolute;
      right: 50px;
    }
  }
}
</style>