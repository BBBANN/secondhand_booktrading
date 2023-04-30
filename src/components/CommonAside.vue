<template>
  <div>
    <el-menu
      :default-active="$route.name"
      class="el-menu-vertical-demo"
      :collapse="isCollapse"
    >
      <el-menu-item
        v-for="item in noChildren"
        :key="item.name"
        :index="item.name"
        @click="handleMenu(item)"
      >
        <i :class="`el-icon-${item.icon}`"></i>
        <span v-show="!isCollapse">{{ item.label }}</span>
      </el-menu-item>
      <div v-for="item in hasChildren" :key="item.label">
        <el-submenu
          v-if="item.label !== '后台管理' || isAdmin"
          :index="item.label"
        >
          <template slot="title">
            <i :class="`el-icon-${item.icon}`"></i>
            <span v-show="!isCollapse">{{ item.label }}</span>
          </template>
          <el-menu-item-group>
            <el-menu-item
              v-for="subItem in item.children"
              :key="subItem.name"
              :index="subItem.name"
              @click="handleMenu(subItem)"
            >
              <i :class="`el-icon-${subItem.icon}`"></i>
              <span>{{ subItem.label }}</span></el-menu-item
            >
          </el-menu-item-group>
        </el-submenu>
      </div>
    </el-menu>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "CommonAside",
  data() {
    return {
      menuData: [
        {
          path: "/",
          name: "home",
          label: "首页",
          icon: "s-home",
        },
        {
          path: "/buy",
          name: "buy",
          label: "购买图书",
          icon: "s-goods",
        },
        {
          path: "/upload",
          name: "upload",
          label: "上传图书",
          icon: "upload",
        },
        {
          path: "/complaint",
          name: "complaint",
          label: "向上申诉",
          icon: "warning",
        },
        {
          label: "后台管理",
          icon: "s-platform",
          children: [
            {
              path: "/addbook",
              name: "addbook",
              label: "添加图书种类",
              icon: "plus",
            },
            {
              path: "/manageuser",
              name: "manageuser",
              label: "用户管理",
              icon: "s-custom",
            },
            {
              path: "/viewfeedback",
              name: "viewfeedback",
              label: "反馈信息",
              icon: "s-comment",
            },
          ],
        },
      ],
    };
  },
  computed: {
    ...mapState("tab", ["isAdmin", "isCollapse"]),
    hasChildren() {
      return this.menuData.filter((item) => item.children);
    },
    noChildren() {
      return this.menuData.filter((item) => !item.children);
    },
  },
  methods: {
    handleMenu(item) {
      if (item.name !== this.$route.name) {
        this.$router.push({
          name: item.name,
        });
      }
    },
  },
};
</script>

<style scoped lang="less">
.el-menu {
  height: 93vh;
}
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
}
</style>