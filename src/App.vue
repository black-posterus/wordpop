<template>
  <el-container>
    <el-header>年度流行语</el-header>
      <el-main>
        <el-button type="primary" icon="el-icon-star-on" @click="alert()">Here we go</el-button>
      </el-main>
    <el-footer>Copyright © 2019 Kid Relient. All rights reserved.</el-footer>
  </el-container>
</template>

<script>
export default {
  name: 'App',
  methods:{
    alert:function(){
      alert("开工了兄弟们")
    }
  }
}
</script>

<style>
  .el-header, .el-footer {
    background-color: #2b2e48;
    color: white;
    text-align: center;
    line-height: 60px;
  }

  .el-footer{
    font-size: 10px;
  }

  .el-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
    line-height: 160px;
  }
</style>
