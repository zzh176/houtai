<template>
  <div class="home">
    <!-- 头部内容 -->
    <div class="zzh-top">
      <div class="zzh-count">
        <h4>公司名称-login</h4>
        <h3>后台管理系统</h3>
        <p>
          <el-button @click="flag=true" v-if="show==false" size="mini" round>未登录</el-button>
          <el-button v-else size="mini" round>退出</el-button>
        </p>
      </div>
    </div>
    <!-- 下边内容盒子 -->
    <div class="zzh-box">
      <!-- zzh-box盒子里左侧内容 -->
      <div class="left">
        <el-col :span="12">
          <el-menu
            default-active="1"
            class="el-menu-vertical-demo"
            @open="handleOpen"
            @close="handleClose"
            background-color="#545c64"
            text-color="#fff"
            active-text-color="#ffd04b"
            :router="true"
          >
            <el-submenu index="1">
              <template slot="title">
                <i class="el-icon-location"></i>
                <span class="span">用户管理</span>
              </template>
              <el-menu-item index="/home/holist">用户列表</el-menu-item>
            </el-submenu>
            <el-menu-item index="/home/quanxian">
              <i class="el-icon-menu"></i>
              <span slot="title">权限管理</span>
            </el-menu-item>
            <el-menu-item index="3">
              <i class="el-icon-document"></i>
              <span slot="title">商品管理</span>
            </el-menu-item>
            <el-menu-item index="4">
              <i class="el-icon-setting"></i>
              <span slot="title">订单管理</span>
            </el-menu-item>
            <el-menu-item index="5">
              <i class="el-icon-setting"></i>
              <span slot="title">数据统计</span>
            </el-menu-item>
          </el-menu>
        </el-col>
      </div>
      <!-- zzh-box里面右侧内容 -->
      <div class="zzh-rigth">
        <router-view />
      </div>
    <!-- 登录 -->
      <div class="login">
        <el-dialog title="登陆表单" :before-close="handleClose" :visible="flag" width="400px">
          <el-form>
            <el-form-item>
              <el-input value="admin"></el-input>
            </el-form-item>

            <el-form-item>
              <el-input type="password" value="123456"></el-input>
            </el-form-item>
          </el-form>
          <div slot="footer" class="dialog-footer">
            <el-button type="primary" @click="Signinnow">立即登陆</el-button>
          </div>
        </el-dialog>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {
      show: false,
      flag: false
    };
  },
  methods: {
    // 登录的弹框
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
    //立即登录方法
    Signinnow() {
      localStorage.setItem("01-token", "admin");
      this.flag = false;
      this.show = true;
      this.left = false;
    }
  }
};
</script>

<style lang="scss" scoped>
.home {
  width: 100%;
  height: 100%;
  .zzh-top {
    width: 100%;
    height: 60px;
    background:#0a0f2f;
    .zzh-count {
      height: 100%;
      margin: 0 auto;
      width: 80%;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
  }
}
.zzh-box {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  box-sizing: border-zzh-box;
  .left {
    width: 15%;
    height: 100%;
    background: #0a0f2f;
    box-sizing: border-zzh-box;
    // position: fixed;
    .el-col-12 {
      width: 100%;
    }
    .span {
      width: 100%;
    }
  }
  .zzh-rigth {
    width: 85%;
    box-sizing: border-zzh-box;
    border: red;
    min-height: 100%;
    padding: 1%;
    // border: 1px solid
  }
}
.left{
  background: #0a0f2f;
}
</style>