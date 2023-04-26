<template>
  <div id="upload">
    <h1><i class="el-icon-upload"></i> 上传图书</h1>
    <img class="uploadImg" src="../assets/图书上传.png" />
    <el-form
      ref="uploadForm"
      :model="uploadForm"
      label-width="80px"
      :rules="rules"
    >
      <el-form-item label="用户名" prop="uploadUser">
        <el-input
          v-model="uploadForm.uploadUser"
          placeholder="请输入您的用户名"
        ></el-input>
      </el-form-item>
      <el-form-item label="上传日期" prop="uploadTime">
        <div class="block">
          <el-date-picker
            v-model="uploadForm.uploadTime"
            align="right"
            type="date"
            placeholder="请输入上传日期"
            value-format="yyyy-MM-dd"
          >
          </el-date-picker>
        </div>
      </el-form-item>
      <el-form-item label="图书价格" prop="bookPrice">
        <el-input
          v-model="uploadForm.bookPrice"
          placeholder="请输入您的定价(RMB)"
        ></el-input>
      </el-form-item>
      <el-form-item label="图书名称" prop="bookName">
        <el-input
          v-model="uploadForm.bookName"
          placeholder="请输入图书名称"
        ></el-input>
      </el-form-item>
      <el-form-item label="图书类型" prop="bookType">
        <el-select v-model="uploadForm.bookType" placeholder="请选择图书类型">
          <el-option
            v-for="item in bookTypeList"
            :key="item"
            :label="item"
            :value="item"
          ></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="图书作者" prop="author">
        <el-input
          v-model="uploadForm.author"
          placeholder="请输入图书作者"
        ></el-input>
      </el-form-item>
      <el-form-item label="图书描述" prop="description">
        <el-input
          type="textarea"
          v-model="uploadForm.description"
          placeholder="对图书添加描述信息"
        ></el-input>
      </el-form-item>
      <el-form-item class="confirm">
        <el-button type="primary" @click="submitForm">确认</el-button>
        <el-button @click="cancelUpload">取消</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import { mapState } from "vuex";
import { Message } from "element-ui";
export default {
  name: "Upload",
  data() {
    return {
      uploadForm: {
        uploadUser: "",
        uploadTime: "",
        bookName: "",
        bookPrice: "",
        author: "",
        description: "",
        bookType: "",
      },
      rules: {
        uploadUser: [
          { required: true, message: "请输入您的用户名", trigger: "blur" },
        ],
        uploadTime: [
          { required: true, message: "请输入上传日期", trigger: "blur" },
        ],
        bookName: [
          { required: true, message: "请输入图书名称", trigger: "blur" },
        ],
        bookPrice: [
          { required: true, message: "请输入您的定价", trigger: "blur" },
        ],
        author: [
          { required: true, message: "请输入图书作者", trigger: "blur" },
        ],
        description: [
          { required: true, message: "请对图书添加描述信息", trigger: "blur" },
        ],
        bookType: [
          { required: true, message: "请输入图书类型", trigger: "blur" },
        ],
      },
    };
  },
  computed: {
    ...mapState("book", ["bookTypeList"]),
  },
  methods: {
    submitForm() {
      this.$refs.uploadForm.validate((valid) => {
        if (valid) {
          Message({
            type: "success",
            message: "上传成功！",
          });
          this.$store.dispatch("book/addBookList", this.uploadForm);
        } else {
          Message({
            type: "error",
            message: "上传失败！",
          });
          return false;
        }
      });
    },
    cancelUpload() {
      this.uploadForm = {};
    },
  },
};
</script>

<style scoped lang="less">
#upload {
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
  .uploadImg {
    position: absolute;
    width: 400px;
    top: 90px;
    right: 120px;
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
      margin: 0 30px;
      width: 250px;
      height: 50px;
    }
  }
}
</style>