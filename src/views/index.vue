<template>
    <div class="index-container">
        <header></header>
        <main>
            <router-view></router-view>
        </main>
        <footer>
            <ul>
                <router-link tag="li" to="/index/movie">电影</router-link>
                <router-link tag="li" to="/index/theater">影院</router-link>
                <router-link tag="li" to="/index/profile">我的</router-link>
            </ul>
        </footer>
    </div>
</template>

<script>
import "../assets/style/common.css"
export default {
    
}
</script>

<style lang="less" scoped>
// scoped表示当前样式的作用域仅限当前组件
.index-container{
    height: 100%;
    display: flex;
    flex-direction: column;
    header{
        height: 50px;
        background: #e54847;
    }
    main{
        flex: 1;
    }
    footer{
        height: 40px;
        background: #ccc;
        ul{
            height: 100%;
            display: flex;
            align-items: center;
            li{
                flex: 1;
                text-align: center;
            }
        }
    }
}

</style>