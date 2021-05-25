<template>
  <!-- <div>{{data.table}}</div> -->
   <el-table
      :data="data.table"
      style="width: 100%">
      <el-table-column
        prop="ctime"
        label="日期">
      </el-table-column>
      <el-table-column
        prop="title"
        label="热点">
      </el-table-column>
      <el-table-column
        prop="description"
        label="内容">
      </el-table-column>
      <el-table-column
        prop="url"
        label="地址">
      </el-table-column>
      
    </el-table>
     <div class="block">
    <span class="demonstration">显示总数</span>
    <el-pagination
    @current-change="handleCurrentChange"
    :current-page="currentpage"
    layout="total, prev, pager, next, jumper"
    :total="data.total"
  >
  </el-pagination>
  </div>
  
</template>

<script>
import { reactive } from "vue";
import { getCourseData } from "../http/api";
import axios from "vue";

export default {
  name: "courselist",
  setup() {
    let data = reactive({
      table: [],
      page: 0,
      pasges: 0,
      total:0
    });
    getCourseData().then(res => {
      data.table = res.newslist;
      console.log(data.table)
    });
    
	 
    
    return {
      data,
     
    };
  },
};
</script>

<style>
</style>