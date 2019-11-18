<template>
    <el-container class="wrapper">
        <el-aside width="220px" style="margin-top: 18px">
        </el-aside>
        <el-main style="height: 800px;">
            <span style="font-size: 24px;font-weight: bold;">公司简介</span>
            <div style="border-top: #999 1px solid;border-top-length:1000px;"></div>
            <ul style="border:1px solid #D5D9DC;margin-top: 10px">
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
        </el-main>
    </el-container>
</template>

<script>
    export default {
        name: "Contact"
    }
</script>

<style scoped>
    .wrapper {
        width:1200px;
        height:70% !important;
        margin:0px auto;
    }
</style>