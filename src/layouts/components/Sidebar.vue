<template>
  <div>
    <el-card shadow="never">
      <el-menu :default-active="active">
        <g-link
          v-for="item in constantRouterMap"
          :key="item.path"
          :to="item.path"
        >
        <el-menu-item :class="{ 'is-active': path === item.path }">
          <i :class="item.meta.icon"></i>
          <span slot="title">{{item.meta.title}}</span>
        </el-menu-item>
        </g-link>
      </el-menu>
    </el-card>
  </div>
</template>

<script>
import { constantRouterMap } from './router'
export default {
  data() {
    return {
      constantRouterMap,
      active: "",
      parentUrl: "",
      menuList: [],
    };
  },
computed: {
    path() {
      return this.$route.path;
    },
  },
  methods: {
    onSelect(index) {
      this.$router.push(index)
    },
  },
};
</script>