<template>
  <div class="home">
    <el-container>
      <el-header class="headBox">
        <el-row :gutter="20">
          <el-col :span="16">
            <img src="../src/assets/logo.png" alt="" />
<!-- /Users/catalina/js/web_project/managememt-master/src/assets/logo.png -->
          </el-col>
          <el-col :span="8" class="infoBox">
             
            <el-button type="text" @click="PClick" class="personal-btn">
              <el-avatar src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png">
             </el-avatar>用户名</el-button>

            <el-button type="text" @click='signOut' class="out-btn">退出</el-button>
          </el-col>
        </el-row>
      </el-header>
      <el-container>
        <el-aside width:200px class="aside">
          <div>
            <el-menu router="true" class="el-menu-vertical-demo">
              <el-menu-item class="el" :route='i.path' v-for="i in tablist" :key=i.name index="i.name">
                <i class="el-icon-document"></i>
                <template #title>{{i.meta.title}}</template>
              </el-menu-item>
            </el-menu>
            
          </div>
          
        </el-aside>
        

        <el-main>
          <router-view/>
        </el-main>
      </el-container>
    </el-container>
    
  </div>
</template>

<script>
// import { reactive } from 'vue'
import router from "../router/index";

export default {
  name: "Home",
  setup() {
    // console.log(router);

    
    const tablist = router.options.routes[0].children;

    const PClick=()=>{
      router.push('/personal')
    }
    const signOut=()=>{
      router.push('/')
    }
    

    return {
      tablist,
      PClick,
      signOut,
      
    };
  },
};
</script>

<style scoped>
img {
  width: 50px;
}
.headBox {
  background-color: #fdf7f7;
  padding: 5px;
}
.infoBox {
  text-align: right;
  
}
.out-btn {
  margin-left: 20px;
}
.personal-btn{
  font-size: 20px;
  color: #da7cff;
}

.el-menu-vertical-demo{
  height: 2000px;
  width:200px;
  background-color: #fdf7f7;
}
.el{
  margin: 40px auto;
  font-size: 18px;
}
</style>
