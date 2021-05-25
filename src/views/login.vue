<template>
  <div class="login">
    <h4>综合门户管理系统</h4>
    <el-form label-width="80px" :model="loginData">
      <el-form-item label="用户名">
        <el-input
          placeholder="请输入用户名"
          v-model="loginData.username"
        ></el-input>
      </el-form-item>
      <el-form-item label="密码">
        <el-input
          placeholder="请输入密码"
          v-model="loginData.password"
          show-password
        ></el-input>
      </el-form-item>
      <el-form-item label="确认密码">
        <el-input
          placeholder="请输入确认密码"
          v-model="loginData.confirmpassword"
          show-password
        ></el-input>
      </el-form-item>
      <el-form-item class="btn">
        <el-button @click="loginClick" class="loginbtn">登录</el-button>
        <el-button type="text" @click="registerClick" class="registerbtn">没有账号？去注册</el-button>
        <!-- <el-button @click="register" class="  ">注册</el-button> -->
      </el-form-item>
    </el-form>
      <div>
        
        
      </div>
    
  </div>

   
</template>

<script>
import { reactive } from "vue";
import { ElMessage } from "element-plus";
import { loginUrl } from "../http/api.js";
import router from "../router/index.js";

export default {
  name: "login",
  setup() {
    const loginData = reactive({
      username: "",
      password: "",
      confirmpassword: "",
    });

    const loginClick = () => {
      if (
        !loginData.username ||
        !loginData.password ||
        !loginData.confirmpassword
      ) {
        ElMessage.error("请输入用户名和密码");
        return;
      }else if(loginData.password !== loginData.confirmpassword){
          ElMessage.error("请输入一致的密码");
      }
      loginUrl(loginData).then((res) => {
        // console.log(res);
        router.push("./courselist");
      });
    };

    const  registerClick= () => {
      router.push("/register");
    };
    return {
      loginData,
      loginClick,
      registerClick,
      
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
.btn {
  text-align: center;
}
.loginbtn {
  width: 100%;
  margin-right: 100px;
}
.registerbtn{
  font-size: 8px;
}
</style>