<template>
  <div>
    <el-container>
      <el-header style="height: auto">
        <header-bar></header-bar>
      </el-header>
      <el-main style="position: relative;padding: 0px;">
        <router-view></router-view>
      </el-main>
      <el-footer style="margin-top: 20px;">
        <footer-bar></footer-bar>
      </el-footer>
    </el-container>
  </div>
</template>

<script>
  import HeaderBar from '@/components/HeaderBar'
  import FooterBar from '@/components/FooterBar'

  export default {
    name: "Main",
    components: {
      HeaderBar, FooterBar
    }
  }
</script>

<style  scoped>
  @import "../styles/css.css";
  .home {
    width: 100%;
    height: 100%;
  }
  .container{
    height: auto;
    background: url('../assets/bg.jpg') no-repeat top center;
    background-size: 100% 100%;
  }
</style>