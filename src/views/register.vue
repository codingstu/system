<template>
  <div class="login">
    <h4>综合门户管理系统</h4>
    <h4>注册</h4>
    <el-form label-width="80px" :model="registerData">
      <el-form-item label="用户名">
        <el-input
          placeholder="请输入用户名"
          v-model="registerData.username"
        ></el-input>
      </el-form-item>
      <el-form-item label="密码">
        <el-input
          placeholder="请输入密码"
          v-model="registerData.password"
          show-password
        ></el-input>
      </el-form-item>
      <el-form-item label="确认密码">
        <el-input
          placeholder="请输入确认密码"
          v-model="registerData.confirmpassword"
          show-password
        ></el-input>
      </el-form-item>
      <el-form-item class="btn">
        <el-button @click="registerClick" class="registerbtn">注册</el-button>
        <el-button type="text" @click="loginClick" class="loginbtn">已有账号，去登录</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import { reactive } from "vue";
import { ElMessage } from 'element-plus'
import  router   from '../router/index.js'


export default {
  name: 'register',

  setup() {
    const registerData = reactive({
      username: "",
      password: "",
      confirmpassword: "",
    });

    const registerClick=()=>{
    let reg = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{4,8}$/; 

      if(!registerData.username||!registerData.password||!registerData.confirmpassword){
          ElMessage.error('请输入用户名和密码');
          
      }else if((reg.test(registerData.password))&&registerData.password===registerData.confirmpassword){
          ElMessage('注册成功');
          setTimeout(()=>{
              router.push("/");
          },2000)
           
      }else if(registerData.password!==registerData.confirmpassword){
          ElMessage.error('请输入一致的密码')
      }
    }
    const loginClick=()=>{
      router.push('/')
    }

    return {
      registerData,
      registerClick,
      loginClick
    };
  },
};
</script>

<style scoped>
.login {
  width: 500px;
  margin: 100px auto;
  border: 1px solid #efefef;
  border-radius: 30px;
  padding: 20px;
}
h4 {
  text-align: center;
}
.registerbtn {
  width: 100%;
}
.btn{
  text-align: center;
}
.loginbtn {
  font-size: 10px;
  
}
</style>

