<template>
  <div id="buy">
    <div class="buyHead">
      <el-button type="default" @click="showAllBookList"> 展示全部 </el-button>

      <el-button class="drawerBtn" @click="handleSearch" type="primary">
        搜索一下
      </el-button>
    </div>

    <!-- 搜索表单 start -->
    <el-drawer
      title="搜索你喜欢的书籍吧！"
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
          <el-form-item label="书名">
            <el-input
              v-model="searchForm.bookName"
              placeholder="请输入书名"
            ></el-input>
          </el-form-item>
          <el-form-item label="作者">
            <el-input
              v-model="searchForm.author"
              placeholder="请输入作者名称"
            ></el-input>
          </el-form-item>

          <el-form-item label="图书类型">
            <el-select
              v-model="searchForm.bookType"
              placeholder="请选择图书类型"
            >
              <el-option
                v-for="item in bookTypeList"
                :key="item"
                :label="item"
                :value="item"
              ></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="价格区间">
            <el-col :span="11">
              <el-input
                placeholder="最低价格"
                v-model="searchForm.lowPrice"
              ></el-input>
            </el-col>
            <el-col class="line" :span="2">&nbsp;---</el-col>
            <el-col :span="11">
              <el-input
                placeholder="最高价格"
                v-model="searchForm.highPrice"
              ></el-input>
            </el-col>
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
      :data="tempBookList"
      stripe
      style="width: 100%"
      height="766"
      border
    >
      <el-table-column prop="bookName" label="书名" width="180">
      </el-table-column>
      <el-table-column prop="bookType" label="类型" width="180">
      </el-table-column>
      <el-table-column prop="author" label="作者"> </el-table-column>
      <el-table-column prop="bookPrice" label="价格"> </el-table-column>
      <el-table-column prop="description" label="描述"> </el-table-column>
      <el-table-column prop="uploadTime" label="上架时间"> </el-table-column>
      <el-table-column prop="uploadUser" label="上架用户"> </el-table-column>
    </el-table>
    <!-- 表格 end -->
    <!-- 分页 start -->
    <div class="pagination">
      <el-pagination
        background
        layout="prev, pager, next"
        :total="searchedBookList.length"
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
import { mapState } from "vuex";
export default {
  name: "Buy",
  data() {
    return {
      drawer: false,
      direction: "rtl",
      searchForm: {
        bookName: "",
        author: "",
        bookType: "",
        lowPrice: "",
        highPrice: "",
      },
      tempBookList: [],
      currentPage: 1,
      pageSize: 15,
    };
  },
  methods: {
    handleClose(done) {
      done();
    },
    showAllBookList() {
      this.searchForm = {
        bookName: "",
        author: "",
        bookType: "",
        lowPrice: "",
        highPrice: "",
      };
      this.tempBookList = this.bookList.slice();
      this.getData();
    },
    handleSearch() {
      this.drawer = true;
    },
    handleConfirm() {
      this.drawer = false;
      this.tempBookList = this.searchedBookList;
      Message({
        message: "查询成功！",
        type: "success",
      });
      this.getData();
    },
    handleCancer() {
      this.searchForm = {
        bookName: "",
        author: "",
        bookType: "",
        lowPrice: "",
        highPrice: "",
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
      const newData = this.searchedBookList.slice(startIndex, endIndex + 1);
      this.tempBookList = newData;
    },
  },
  computed: {
    searchedBookList: {
      get() {
        return this.bookList.filter((item) => {
          let contion =
            (this.searchForm.author == "" ||
              item.author == this.searchForm.author) &&
            (this.searchForm.bookName == "" ||
              item.bookName == this.searchForm.bookName) &&
            (this.searchForm.bookType == "" ||
              this.searchForm.bookType == "任意类型" ||
              item.bookType == this.searchForm.bookType) &&
            (this.searchForm.lowPrice == "" ||
              item.bookPrice >= this.searchForm.lowPrice) &&
            (this.searchForm.highPrice == "" ||
              item.bookPrice <= this.searchForm.highPrice);
          if (contion) {
            return item;
          }
        });
      },
    },
    ...mapState("book", ["bookTypeList", "bookList"]),
  },
  mounted() {
    // 使 store 向后端获取数据
    this.$store.dispatch("book/addBook", "");
    this.tempBookList = this.bookList.slice();
    this.getData();
  },
};
</script>

<style scoped lang="less">
#buy {
  .buyHead {
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