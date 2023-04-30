<template>
  <div id="addbook">
    <h1><i class="el-icon-plus"></i> 添加图书种类</h1>
    <img class="addbookImg" src="../assets/添加图书类型.png" />
    <div class="currentTypeList">
      <el-card shadow="never">
        <div slot="header" class="clearfix">
          <h3>当前存在的图书类型</h3>
        </div>
        <p v-for="item in bookTypeList" :key="item">{{ item }}</p>
      </el-card>
    </div>
    <el-divider></el-divider>
    <div class="addNewType">
      <el-card shadow="never">
        <div slot="header" class="clearfix">
          <h3>添加图书种类</h3>
        </div>
        <el-form
          ref="addbookForm"
          :model="addbookForm"
          label-width="80px"
          :rules="rules"
        >
          <el-form-item label="新增类型" prop="newBookType">
            <el-input
              v-model="addbookForm.newBookType"
              placeholder="请输入新增的图书类型"
            ></el-input>
          </el-form-item>
          <el-form-item class="confirm">
            <el-button type="primary" @click="submitForm">确认</el-button>
            <el-button @click="cancelAddbook">取消</el-button>
          </el-form-item>
        </el-form>
      </el-card>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import { Message } from "element-ui";
export default {
  name: "addBook",
  data() {
    return {
      addbookForm: {
        newBookType: "",
      },
      rules: {
        newBookType: [
          { required: true, message: "请输入新增图书类型", trigger: "blur" },
        ],
      },
    };
  },
  computed: {
    ...mapState("book", ["bookTypeList"]),
  },
  methods: {
    submitForm() {
      this.$refs.addbookForm.validate((valid) => {
        if (valid) {
          Message({
            type: "success",
            message: "新增成功！",
          });
          this.$store.dispatch(
            "book/addBookType",
            this.addbookForm.newBookType
          );
        } else {
          Message({
            type: "error",
            message: "新增失败！",
          });
          return false;
        }
      });
    },
    cancelAddbook() {
      this.addbookForm = {};
    },
  },
  mounted() {
    // 让 store 向后端获取数据
    this.$store.dispatch("book/addBookType", this.addbookForm.newBookType);
  },
};
</script>

<style scoped lang="less">
#addbook {
  position: relative;
  margin: 0 auto;
  padding: 60px 100px;
  width: 1140px;
  height: 100%;
  border: 1px solid #ccc;
  border-radius: 10px;
  box-shadow: 0 0 20px 2px #ccc;
  h1 {
    color: #0077fe;
    font-size: 32px;
  }
  .addbookImg {
    position: absolute;
    width: 350px;
    top: 190px;
    right: 120px;
  }
  .currentTypeList {
    margin: 50px 0;
    p {
      margin-bottom: 10px;
    }
  }
  .addNewType {
    margin: 50px 0;
  }
  .el-form-item {
    margin-top: 35px;
  }
  /deep/.el-input {
    width: 350px;
  }
  /deep/.el-textarea__inner {
    width: 600px;
    min-height: 250px !important;
  }
  .confirm {
    margin-top: 40px;
    .el-button {
      margin: 0 200px;
      width: 150px;
      &:nth-child(2) {
        margin: -120px;
      }
    }
  }
}
</style>