<template>
  <div id="complaint">
    <h1><i class="el-icon-warning"></i> 向上申诉</h1>
    <img class="complaintImg" src="../assets/feedback.png" />
    <el-form
      ref="complaintForm"
      :model="complaintForm"
      label-width="80px"
      :rules="rules"
    >
      <el-form-item label="用户名" prop="userName">
        <el-input
          v-model="complaintForm.userName"
          placeholder="请输入您的用户名"
        ></el-input>
      </el-form-item>
      <el-form-item label="邮箱" prop="email">
        <div class="block">
          <el-input v-model="complaintForm.email" placeholder="请输入邮箱">
          </el-input>
        </div>
      </el-form-item>
      <el-form-item label="手机号码" prop="phoneNumber">
        <el-input
          v-model="complaintForm.phoneNumber"
          placeholder="请输入您的手机号码"
        ></el-input>
      </el-form-item>
      <el-form-item label="反馈类型" prop="feedbackType">
        <el-select
          v-model="complaintForm.feedbackType"
          placeholder="请选择反馈类型"
        >
          <el-option label="功能建议" value="功能建议"></el-option>
          <el-option label="用户体验" value="用户体验"></el-option>
          <el-option label="图书缺陷" value="图书缺陷"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="问题描述" prop="content">
        <el-input
          type="textarea"
          v-model="complaintForm.content"
          placeholder="请描述您的建议或所遇到的问题"
        ></el-input>
      </el-form-item>
      <el-form-item class="confirm">
        <el-button type="primary" @click="submitForm">确认</el-button>
        <el-button @click="cancelComplaint">取消</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import { Message } from "element-ui";
import { addFeedBack } from "../api";
export default {
  name: "Complaint",
  data() {
    return {
      complaintForm: {
        userName: "",
        email: "",
        phoneNumber: "",
        feedbackType: "",
        content: "",
      },
      rules: {
        userName: [
          { required: true, message: "请输入您的用户名", trigger: "blur" },
        ],
        email: [{ required: true, message: "请输入邮箱", trigger: "blur" }],
        phoneNumber: [
          { required: true, message: "请输入图书名称", trigger: "blur" },
        ],
        feedbackType: [
          { required: true, message: "请输入您的定价", trigger: "blur" },
        ],
        content: [
          { required: true, message: "请输入图书作者", trigger: "blur" },
        ],
      },
    };
  },
  methods: {
    submitForm() {
      this.$refs.complaintForm.validate((valid) => {
        if (valid) {
          Message({
            type: "success",
            message: "反馈成功！",
          });
          addFeedBack(this.complaintForm);
        } else {
          Message({
            type: "error",
            message: "反馈失败！",
          });
          return false;
        }
      });
    },
    cancelComplaint() {
      this.complaintForm = {};
    },
  },
};
</script>

<style scoped lang="less">
#complaint {
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
  .complaintImg {
    position: absolute;
    width: 400px;
    top: 50px;
    right: 100px;
  }
  .el-form-item {
    margin-top: 40px;
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