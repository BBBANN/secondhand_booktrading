<template>
  <div>
    <div class="header">
      <div class="headerTitle">
        <el-button
          @click="handleCollapse"
          type="primary"
          class="el-icon-menu"
        ></el-button>
        <img class="headerLogo" src="../assets/seuLogo.png" alt="" />
        <p>东大二手书交易平台</p>
      </div>
      <el-button
        @click="exitLogin"
        class="exitLogin"
        :round="true"
        type="primary"
        >注销登录</el-button
      >
    </div>
  </div>
</template>

<script>
export default {
  name: "CommonHead",
  methods: {
    handleCollapse() {
      this.$store.commit("tab/CHANGE_ISCOLLAPSE");
    },
    // --------------------------等待后端----------------------------------------
    exitLogin() {
      /**
       * cleartoken section
       */
      this.$router.push({
        name: "login",
      });
    },
  },
};
</script>

<style scoped lang="less">
@base: #434a66;

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 55px;
  height: 100%;
  box-shadow: 0 0 5px #ccc;
  .headerTitle {
    display: flex;
    align-items: center;
    .el-button {
      font-size: 14px;
      margin-right: 100px;
    }
    p {
      color: @base;
      font-size: 20px;
      margin: 0 0 0 20px;
      color: #0077fe;
      transition: all 0.5s;
      cursor: default;
      &:hover {
        color: @base;
      }
    }
    .headerLogo {
      width: 204px;
      height: 64px;
    }
  }
  .exitLogin {
    font-size: 14px;
  }
}
</style>