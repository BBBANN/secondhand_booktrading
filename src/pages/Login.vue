<template>
  <div id="login">
    <!-- 注册处 -->
    <el-drawer
      size="20%"
      title="注册用户"
      :visible.sync="drawer"
      :direction="direction"
    >
      <el-form
        label-width="70px"
        :model="registerForm"
        :rules="rules"
        ref="userForm"
      >
        <el-form-item label="账号" prop="userName">
          <el-input
            v-model="registerForm.userName"
            placeholder="请输入账号"
          ></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="password">
          <el-input
            v-model="registerForm.password"
            placeholder="请输入密码"
            type="password"
          ></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitRegister"
            >注&nbsp;&nbsp;&nbsp;册</el-button
          >
          <el-button @click="handleCancer">取&nbsp;&nbsp;&nbsp;消</el-button>
        </el-form-item>
      </el-form>
    </el-drawer>
    <!-- 登录处 -->
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
            <el-form-item label="账号" prop="userName">
              <el-input
                v-model="userInfo.userName"
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
              <p>
                还未拥有账号？点击<el-link
                  type="primary"
                  :underline="false"
                  @click="drawer = true"
                  >注册</el-link
                >
              </p>
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
import { validateLogin, register } from "../api";
import { Message } from "element-ui";
export default {
  name: "Login",
  data() {
    return {
      userInfo: {
        userName: "",
        password: "",
      },
      rules: {
        userName: [
          { required: true, trigger: "blur", message: "请输入用户名" },
        ],
        password: [{ required: true, trigger: "blur", message: "请输入密码" }],
      },
      drawer: false,
      direction: "rtl",
      registerForm: {
        userName: "",
        password: "",
      },
    };
  },
  methods: {
    // 点击登录按钮
    submitLogin() {
      this.$refs.userForm.validate((val) => {
        if (val) {
          const res = validateLogin(this.userInfo).then((val) => {
            switch (parseInt(val.data)) {
              // 1. 不能匹配：0
              case 0:
                Message({
                  type: "error",
                  message: "用户不存在或用户名、密码错误",
                });
                break;
              // 2. 能匹配但不是管理员：1
              case 1:
                this.$router.push("/home");
                Message({
                  type: "success",
                  message: "用户你好，欢迎登录",
                });
                break;
              // 3. 能匹配且是管理员：2
              case 2:
                this.$router.push("/home");
                this.$store.commit("tab/CHANGE_ISADMIN");
                Message({
                  type: "success",
                  message: "管理员你好，欢迎登录",
                });
                break;
              default:
                console.log("error");
            }
          });
        } else {
          console.log("fail to login");
        }
      });
    },

    submitRegister() {
      register(this.registerForm);
      Message({
        type: "success",
        message: "注册成功",
      });
      this.drawer = false;
    },
    handleCancer() {
      this.drawer = false;
      this.registerForm = {
        userName: "",
        password: "",
      };
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
  .el-drawer {
    .el-form-item {
      margin-top: 20px;
    }
    .el-button {
      margin-top: 30px;
      margin-right: 75px;
    }
    .el-input {
      max-width: 300px;
    }
  }
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