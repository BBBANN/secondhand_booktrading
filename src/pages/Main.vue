<template>
  <div>
    <el-container>
      <!-- 顶部 start -->
      <el-header height="70px"> 
        <CommonHead/>
      </el-header>
      <!-- 顶部 end -->
      <el-container>
        <!-- 侧栏 start -->
        <el-aside width="200px">
          <CommonAside/>
        </el-aside>
        <!-- 侧栏 end -->
        <!-- 主区 start -->
        <el-main>
          <router-view></router-view>
        </el-main>
        <!-- 主区 end -->
      </el-container>
    </el-container>
  </div>
</template>

<script>
import CommonHead from "../components/CommonHead.vue";
import CommonAside from "../components/CommonAside.vue";
export default {
  name: "Main",
  components: {
    CommonHead,
    CommonAside
  },
};
</script>

<style scoped lang="less">
.el-header {
  padding: 0;
}
</style>