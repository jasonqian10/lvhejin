<template>
  <div class="header top">
    <h1 class="logo"><a href="##"><img src="@/assets/公司名logo.jpeg" width="260px" height="84px" alt="xx公司"/></a></h1>
    <div class="nav">
      <ul class="nav-ul">
        <li class="nav-li"><router-link :to="{ path: '/home' }" class="li_a">网站首页</router-link></li>
        <li class="nav-li"><router-link :to="{ path: '/about' }" class="li_a">公司简介</router-link></li>
        <li class="nav-li"><router-link :to="{ path: '/products' }" class="li_a">产品介绍</router-link></li>
<!--        <li class="nav-li"><a href="##" class="li_a">行业资讯</a></li>-->
        <li class="nav-li"><router-link :to="{ path: '/contact' }" class="li_a">联系我们</router-link></li>
<!--        <li class="nav-li"><a href="##" class="li_a">网站地图</a></li>-->
<!--        <li class="nav-li"><a href="##" class="li_a">收藏网站</a></li>-->
      </ul>
    </div>
  </div>
</template>

<script>
  export default {
    name: "HeaderBar"
  }
</script>

<style scoped>
  @import "../../styles/css.css";

  .logo {
    float: left;
    width: 260px;
    height: 80px;
    border-right: #999 1px solid;
  }

  .top {
    border-top: #666 10px solid;
  }

  .header {
    height: 80px;
    width: 1200px;
    margin: 0px auto;
    border-top: #666 10px solid;
  }

  .nav {
    float: left;
    width: 920px;
    height: 80px;
    margin-left: 1px;
    background-image: linear-gradient(#ffffff, #C2DEF9);
    /*background:url(../../assets/nav_bg.png) repeat-x 0px -40px;*/
  }

  .nav-ul {
    float: left;
    margin-top: 15px;
  }

  .nav-li {
    float: left;
    width: 120px;
    height: 40px;
    line-height: 40px;
    padding: 0px 30px 0px 25px;
    background: url(../../assets/nav_bg.png) no-repeat right top;
  }
  .li_a {
    font-size: 20px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    font-family: 微软雅黑Monaco;
  }

</style>
