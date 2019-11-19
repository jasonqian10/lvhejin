<template>
  <div>
    <el-container class="wrapper">
      <el-header class="swapper">
        <swiper :options="swiperOption" class="swiper-img" >
          <swiper-slide style="width: 100%"  v-for='item in swiperList' :key='item.id'>
            <img class='swiper-img' :src="item.imgUrl" style="width: auto;height: auto" />
          </swiper-slide>
          <div style="width: 100%"   slot="pagination"></div>
        </swiper>
      </el-header>
      <el-container>
        <el-aside width="300px" style="margin-top: 18px">
          <div class="titles">
              <span>
              产品分类
              </span>
              <span>
                <router-link :to="{ path: '/products' }">More&gt;&gt;</router-link>
              </span>
          </div>
          <ul >
            <li class="product_ul"><a href="##">旋风子</a></li>
            <li class="product_ul"><a href="##">冷渣机</a></li>
            <li class="product_ul"><a href="##">干渣机</a></li>
            <li class="product_ul"><a href="##">耐热耐磨钢铸件</a></li>
            <li class="product_ul"><a href="##">穿孔顶头</a></li>
          </ul>

          <div class="titles" style="margin-top: 15px">
            <span>新闻中心</span>
            <span><a href="##">More&gt;&gt;</a></span>
          </div>
          <ul >
            <li class="product_ul"><a href="##">xxxxxxxxxxxxxxxxxxxxx</a></li>
            <li class="product_ul"><a href="##">xxxxxxxxxxxxxxxxxxxxx</a></li>
            <li class="product_ul"><a href="##">xxxxxxxxxxxxxxxxxxxxx</a></li>
            <li class="product_ul"><a href="##">xxxxxxxxxxxxxxxxxxxxx</a></li>
            <li class="product_ul"><a href="##">xxxxxxxxxxxxxxxxxxxxx</a></li>
          </ul>

          <div class="titles" style="margin-top: 15px">
            <span>联系我们</span>
            <span><router-link :to="{ path: '/contact' }">More&gt;&gt;</router-link></span>
          </div>
          <ul style="border:1px solid #D5D9DC;">
            <p style="padding:10px;line-height: 20px;color:#333;font-size: 15px;font-weight: normal;">
              <img src="@/assets/contact.jpg" width="184" height="70" alt="tupian"/>
              <br>
              地  址: 苏州高新区金枫路
              <br>
              联系人: 钱经理
              <br>
              手  机: 13878928901
              <br>
              邮  箱: jasonqian10@163.com
              <br>
            </p>
          </ul>
        </el-aside>
        <el-main>
          <div class="titles">
            <span>公司简介</span>
            <span><router-link :to="{ path: '/about' }">More&gt;&gt;</router-link></span>
          </div>
          <div class="company_about">
            <p style="font-size: 16px;line-height: 25px;font-family: 微软雅黑Monaco;margin-top: 10px">
              <img src="@/assets/intr.jpg" class="company_about_img" alt="简介"/>江苏麟瑞合金机械有限公司主要从事旋风子、热电厂、垃圾焚烧发电厂灰渣系统设备及耐热耐磨钢产品的研发和生产，是一家集生产、科技、开发于一体的现代化公司。 公司专业化生产：旋风子、冷渣机、风帽、中心筒、防护瓦、炉排、火嘴、带式输送机、高温灰渣闸阀、斗式提升机、刮板机、给煤机等锅炉辅机和配件冷渣机。我公司致力于环保、节能技术开发，已成功开发垃圾渗滤液处理设备、低温余热回收设备，获得用户好评。
              我公司集加工与检测于一体，设备精良、拥有大型卧式车床、大型数控车床、自动埋弧焊、自动气保焊、自动等离子和火焰切割、 中频炉、离心铸造、热处理、光谱仪等生产和检测设备。</p>
          </div>

          <div class="titles" style="margin-top: 15px">
            <span>产品简介</span>
            <span><router-link :to="{ path: '/products' }">More&gt;&gt;</router-link></span>
          </div>
          <el-row style="margin-left: 40px">
            <el-col :span="5" v-for="(o, index) in productsShowList" :key="index" :offset="(index)%4 !== 0 ? 1 : 0">
              <div class="product_show">
                <p class="demonstration">{{o.label}}</p>
                <img style="width: 150px; height: 150px" :src="o.src"/>
              </div>
            </el-col>
          </el-row>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
  import '../../node_modules/swiper/dist/css/swiper.css'
  import { swiper, swiperSlide } from 'vue-awesome-swiper'
  export default {
    name: "Home",
  data(){
    return{
      swiperOption:{
        // 参数选项,显示小点
        pagination:'.swiper-pagination',
        //循环
        loop:true,
        //每张播放时长3秒，自动播放
        autoplay:1000,
        //滑动速度
        speed:1000,
        // delay:1000
      },
      //三张轮播，使用变量循环
      swiperList:[
        {
          id:'001',
          imgUrl:require('@/assets/lunbo1.png')
        },
        {
          id:'002',
          imgUrl:require('@/assets/lunbo3.png')
        }
      ],
      productsShowList:[
        {
          label:'不锈钢风帽',
          src: require('@/assets/不锈钢风帽.jpg')
        },
        {
          label:'中心筒',
          src: require('@/assets/中心筒.png')
        },
        {
          label:'冷渣机1',
          src: require('@/assets/冷渣机1.png')
        },
        {
          label:'冷渣机2',
          src: require('@/assets/冷渣机2.png')
        },
        {
          label:'干渣机1',
          src: require('@/assets/干渣机1.png')
        },
        {
          label:'干渣机2',
          src: require('@/assets/干渣机2.png')
        },
        {
          label:'旋风子1',
          src: require('@/assets/旋风子1.png')
        },
        {
          label:'旋风子2',
          src: require('@/assets/旋风子2.png')
        },
        {
          label:'穿孔顶头1',
          src: require('@/assets/穿孔顶头1.png')
        },
        {
          label:'穿孔顶头2',
          src: require('@/assets/穿孔顶头2.png')
        },
        {
          label:'穿孔顶头3',
          src: require('@/assets/穿孔顶头3.png')
        },
        {
          label:'穿孔顶头4',
          src: require('@/assets/穿孔顶头4.png')
        },
        {
          label:'风帽',
          src: require('@/assets/风帽.png')
        }
      ]

    }
  },
  components: {
    swiper,
    swiperSlide
  },
  }
</script>

<style scoped>
  @import "../styles/css.css";

  .wrapper {
    width:1200px;
    height:auto;
    margin:0px auto;
  }

  .swapper {
    height: 330px !important;
    width: 100%;
    padding: 0px;
  }
  .swiper-img {
    height: 324px !important;
    width: 1200px !important;
  }
  .about_p {
    font-size: medium ;
    font-family: 微软雅黑Monaco;
    line-height: 20px;
  }
  .titles {
    background:url(../assets/main_titBg.png) no-repeat;
    height: 34px;
    line-height: 34px;
    border: 1px solid #D5D9DC;
    font-family: 'microsoft yahei';
    font-size: 16px;
    padding-left: 40px;
    font-weight: bold;
    display:flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }
  .product_ul{
    line-height: 38px;
    border: 1px solid #D5D9DC;
    border-top-color: rgb(213, 217, 220);
    padding-left: 20px;
    font-size: 16px;
    background: url(../assets/ico02.jpg) no-repeat 10px center;
  }
  .company_about{
    overflow: hidden;
  }
  .company_about_img{
    float: left;
    margin-right: 10px;
    width: 140px;
    height: 140px;
    padding: 3px;
    border: 1px solid #ccc;
  }
  .demonstration{
    display: block;
    color:#8492a6;
    font-size: 18px;
    width: 150px;
    margin-bottom: 5px;
  }
  .product_show{
    padding: 10px 0;
    text-align: center;
    display: inline-block;
    width: 20%;
    box-sizing: border-box;
    vertical-align: top;
    /*border-right: 1px solid #eff2f6;*/
  }
</style>
