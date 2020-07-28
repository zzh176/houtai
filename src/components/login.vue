<template>
  <div class="login">
      <el-form  class="login-form">
          <el-form-item label="账号" prop="username">
              <el-input v-model="zhanghao" placeholder="请输入账号"></el-input>
          </el-form-item>
          <el-form-item label="密码" prop="password">
              <el-input type="password" v-model="mima" placeholder="请输入密码"></el-input>
          </el-form-item>
          <el-form-item>
              <el-button type="primary" @click="onSubmit()">登录</el-button>
          </el-form-item>
      </el-form>
  </div>
</template>

<script>

export default {
  name: "Login",
  data() {
      return {
        
       zhanghao:"",
        mima:"",
      }
    },
    methods: {
      onSubmit(){
        //   var id = this.$route.params.id;
        
        var obj = new Object
        obj.username=this.zhanghao
        obj.password=this.mima
        console.log(this.show)
        
        localStorage.setItem("01-token",JSON.stringify(obj))
        this.$router.push("/home")

      }
    }
};
</script>

<style lang="scss" scoped>
.login-form{
    width: 350px;
    margin: 180px auto;
    background-color:rgba(255, 255, 255, .8);
    background: #0a0f2f;
    padding: 30px;
    border-radius: 20px; 
    .login-title{
        text-align: center;
        color: #303133
    }
}
.login{
    width: 100%;
    height: 100%;
    background: gainsboro;
    position: absolute;
    overflow: hidden;

}
</style>