<template>
  <div id="viewFeedback">
    <div class="viewFeedbackHead">
      <el-button type="default" @click="showAllFeedbackList">
        展示全部
      </el-button>

      <el-button class="drawerBtn" @click="handleSearch" type="primary">
        搜索一下
      </el-button>
    </div>

    <!-- 搜索表单 start -->
    <el-drawer
      title="搜索反馈"
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
          <el-form-item label="用户名">
            <el-input
              v-model="searchForm.userName"
              placeholder="请输入用户名"
            ></el-input>
          </el-form-item>
          <el-form-item label="反馈类型">
            <el-select
              v-model="searchForm.feedbackType"
              placeholder="请选择反馈类型"
            >
              <el-option
                v-for="item in feedbackTypeList"
                :key="item"
                :label="item"
                :value="item"
              ></el-option>
            </el-select>
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
      :data="tempFeedbackList"
      stripe
      style="width: 100%"
      height="766"
      border
    >
      <el-table-column prop="userName" label="用户名"> </el-table-column>
      <el-table-column prop="feedbackType" label="反馈类型"> </el-table-column>
      <el-table-column prop="desc" label="问题描述"> </el-table-column>
    </el-table>
    <!-- 表格 end -->
    <!-- 分页 start -->
    <div class="pagination">
      <el-pagination
        background
        layout="prev, pager, next"
        :total="searchedFeedbackList.length"
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
export default {
  name: "ManageUser",
  data() {
    return {
      drawer: false,
      direction: "rtl",
      searchForm: {
        userName: "",
        feedbackType: "",
        desc: "",
      },
      tempFeedbackList: [],
      currentPage: 1,
      pageSize: 15,
      feedbackTypeList: ["功能建议", "用户体验", "图书缺陷"],
      feedbackList: [
        {
          userName: "1",
          feedbackType: "功能建议",
          desc: "建议取消东南大学早操",
        },
        {
          userName: "2",
          feedbackType: "功能建议",
          desc: "建议取消东南大学早操",
        },
        {
          userName: "1",
          feedbackType: "用户体验",
          desc: "建议取消东南大学早操",
        },
        {
          userName: "1",
          feedbackType: "功能建议",
          desc: "建议取消东南大学早操",
        },
        {
          userName: "1",
          feedbackType: "功能建议",
          desc: "建议取消东南大学早操",
        },
        {
          userName: "1",
          feedbackType: "功能建议",
          desc: "建议取消东南大学早操",
        },
        {
          userName: "1",
          feedbackType: "功能建议",
          desc: "建议取消东南大学早操",
        },
        {
          userName: "1",
          feedbackType: "功能建议",
          desc: "建议取消东南大学早操",
        },
        {
          userName: "1",
          feedbackType: "功能建议",
          desc: "建议取消东南大学早操",
        },
        {
          userName: "1",
          feedbackType: "功能建议",
          desc: "建议取消东南大学早操",
        },
        {
          userName: "1",
          feedbackType: "功能建议",
          desc: "建议取消东南大学早操",
        },
        {
          userName: "1",
          feedbackType: "功能建议",
          desc: "建议取消东南大学早操",
        },
        {
          userName: "1",
          feedbackType: "功能建议",
          desc: "建议取消东南大学早操",
        },
        {
          userName: "1",
          feedbackType: "功能建议",
          desc: "建议取消东南大学早操",
        },
        {
          userName: "1",
          feedbackType: "功能建议",
          desc: "建议取消东南大学早操",
        },
        {
          userName: "1",
          feedbackType: "功能建议",
          desc: "建议取消东南大学早操",
        },
        {
          userName: "1",
          feedbackType: "功能建议",
          desc: "建议取消东南大学早操",
        },
        {
          userName: "1",
          feedbackType: "功能建议",
          desc: "建议取消东南大学早操",
        },
        {
          userName: "1",
          feedbackType: "功能建议",
          desc: "建议取消东南大学早操",
        },
        {
          userName: "1",
          feedbackType: "功能建议",
          desc: "建议取消东南大学早操",
        },
        {
          userName: "1",
          feedbackType: "功能建议",
          desc: "建议取消东南大学早操",
        },
        {
          userName: "1",
          feedbackType: "功能建议",
          desc: "建议取消东南大学早操",
        },
        {
          userName: "1",
          feedbackType: "功能建议",
          desc: "建议取消东南大学早操",
        },
        {
          userName: "1",
          feedbackType: "功能建议",
          desc: "建议取消东南大学早操",
        },
        {
          userName: "1",
          feedbackType: "功能建议",
          desc: "建议取消东南大学早操",
        },
      ],
    };
  },
  methods: {
    handleClose(done) {
      done();
    },
    showAllFeedbackList() {
      this.searchForm = {
        userName: "",
        feedbackType: "",
        desc: "",
      };
      this.tempFeedbackList = this.feedbackList.slice();
      this.getData();
    },
    handleSearch() {
      this.drawer = true;
    },
    handleConfirm() {
      this.drawer = false;
      this.tempFeedbackList = this.searchedFeedbackList;
      Message({
        message: "查询成功！",
        type: "success",
      });
      this.getData();
    },
    handleCancer() {
      this.searchForm = {
        userName: "",
        feedbackType: "",
        desc: "",
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
      const newData = this.searchedFeedbackList.slice(startIndex, endIndex + 1);
      this.tempFeedbackList = newData;
    },
  },
  computed: {
    searchedFeedbackList: {
      get() {
        return this.feedbackList.filter((item) => {
          let contion =
            (this.searchForm.userName == "" ||
              item.userName == this.searchForm.userName) &&
            (this.searchForm.feedbackType == "" ||
              item.feedbackType == this.searchForm.feedbackType);
          if (contion) {
            return item;
          }
        });
      },
    },
  },
  mounted() {
    /**
     * 先从后端获取用户列表
     */
    this.tempFeedbackList = this.feedbackList.slice();
    this.getData();
  },
};
</script>

<style scoped lang="less">
#viewFeedback {
  .viewFeedbackHead {
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