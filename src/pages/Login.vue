<template>
  <div id="login">
    <el-card class="loginCard" shadow="hover" :body-style="{ padding: 0 }">
      <el-row>
        <!-- 登录页图片布局 -->
        <el-col :span="13">
          <div class="loginImg">
            <img src="../assets/login.jpg" />
          </div>
        </el-col>
        <!-- 登录页表单布局 -->
        <el-col :span="11">
          <!-- 表单 start -->
          <el-form
            label-width="70px"
            :model="userInfo"
            :rules="rules"
            ref="userForm"
          >
            <h3 class="login_title">
              东大二手书交易平台
              <p>用户登录</p>
            </h3>
            <el-form-item label="账号" prop="username">
              <el-input
                v-model="userInfo.username"
                placeholder="请输入账号"
              ></el-input>
            </el-form-item>
            <el-form-item label="密码" prop="password">
              <el-input
                v-model="userInfo.password"
                placeholder="请输入密码"
                type="password"
              ></el-input>
            </el-form-item>
            <!-- 注册（暂定） -->
            <el-form-item>
              <p>还未拥有账号？点击<a href="">注册</a></p>
            </el-form-item>

            <el-form-item>
              <el-button type="primary" @click="submitLogin"
                >登&nbsp;&nbsp;&nbsp;录</el-button
              >
            </el-form-item>
          </el-form>
          <!-- 表单 end -->
        </el-col>
      </el-row>
    </el-card>
  </div>
</template>

<script>
export default {
  name: "Login",
  data() {
    return {
      userInfo: {
        username: "",
        password: "",
      },
      rules: {
        username: [
          { required: true, trigger: "blur", message: "请输入用户名" },
        ],
        password: [{ required: true, trigger: "blur", message: "请输入密码" }],
      },
    };
  },
  methods: {
    // 点击登录按钮
    submitLogin() {
      this.$refs.userForm.validate((val) => {
        if (val) {
          console.log("login successfully");
          console.log(this.userInfo);
        } else {
          console.log("fail to login");
        }
      });
    },
  },
  mounted() {},
};
</script>

<style scoped lang="less">
@baseColor_1: #34b1fe;
@baseColor_2: #bf71ff;
#login {
  position: relative;
  min-height: 100vh;
  background: linear-gradient(to left top, @baseColor_1, @baseColor_2);
  //登录界面卡片
  .loginCard {
    border: 0;
    position: absolute;
    left: 50%;
    top: 15%;
    transform: translateX(-50%);
    max-width: 800px;
    height: 520px;
    border-radius: 10px;
    &:hover {
      box-shadow: 0 0 15px rgba(0, 0, 0, 0.5);
    }
    // 登录界面图片
    .loginImg {
      height: 520px;
      overflow: hidden;
      img {
        transform: translateX(-62px);
        height: 100%;
      }
    }
    // 标题
    .login_title {
      text-align: center;
      font-size: 28px;
      background: -webkit-linear-gradient(135deg, @baseColor_1, @baseColor_2);
      -webkit-background-clip: text;
      color: transparent;
      p {
        margin: 15px 0;
        font-weight: 400;
        font-size: 20px;
      }
    }
    // 表单内容
    .el-form {
      padding: 80px 50px;
      /deep/.el-form-item {
        margin: 25px 0;
        // 登录按钮
        button {
          width: 70%;
          height: 35px;
          background: linear-gradient(to left top, @baseColor_1, @baseColor_2);
          font-size: 14px;
        }
        .el-form-item__content {
          // 注册文字
          p {
            text-align: left;
            font-size: 12px;
          }
        }
      }
    }
  }
}
</style>