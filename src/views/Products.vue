<template>
    <el-container class="wrapper">
        <el-aside width="220px" style="margin-top: 18px"></el-aside>
        <el-main>
            <span style="font-size: 24px;font-weight: bold;">产品介绍</span>
            <div style="border-top: #999 1px solid;border-top-length:1000px;"></div>
            <el-row style="margin-left: 40px">
                <el-col :span="5" v-for="(o, index) in productsShowList" :key="o" :offset="(index)%4 !== 0 ? 1 : 0">
                    <div class="product_show">
                        <p class="demonstration">{{o.label}}</p>
                        <img style="width: 150px; height: 150px" :src="o.src"/>
                    </div>
                </el-col>
            </el-row>
        </el-main>
    </el-container>
</template>

<script>
    export default {
        name: "Products",
        data(){return{
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
        }}
    }
</script>

<style scoped>
    .wrapper {
        width:1200px;
        height:auto;
        margin:0px auto;
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