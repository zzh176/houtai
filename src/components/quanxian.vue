<template>
  <div>
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item :to="{ path: '/' }">权限管理</el-breadcrumb-item>
      <el-breadcrumb-item>
        <a href="/quanxian">{{$route.meta.title}}</a>
      </el-breadcrumb-item>
    </el-breadcrumb>
    <h1>权限管理</h1>
  </div>
</template>

<script>
export default {
  name: "Quanxian",
  data() {
    return {};
  }
};
</script>

<style lang="sass" scoped>

</style>