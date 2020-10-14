<template>
    <div>
        <AD></AD>
        <div class="header">
            <router-link to="/city" tag="div" class="city">北京</router-link>
            <router-link to="/index/movie/components/hotshowing" tag="div" class="hotshowing">正在热映</router-link>
            <router-link to="/index/movie/components/comingsoon" tag="div" class="comingsoon">即将上映</router-link>
            <router-link to="/search" tag="div" class="search">搜索</router-link>
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
import AD from '../../components/ad'
export default {
    components:{
        AD
    }  
}
</script>

<style lang="less" scoped>
.header{
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    height: 45px;
    line-height: 45px;
    font-size: 15px;
    div{
        height: 100%;
    }
    .city,.search{
        flex: 70;
    }
    .hotshowing,.comingsoon{
        flex: 80;
    }
    .router-link-exact-active{
        color: red;
        position: relative;
    }
    .router-link-exact-active::after{
        position: absolute;
        content: " ";
        bottom: 0px ;
        left: 8px ;
        right: 8px;
        background: red;
        height: 2px;
    }
        
}
</style>