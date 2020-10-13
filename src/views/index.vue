<template>
    <div class="index-container" @click="SET_SHOW_NAV(!showNav)">
        <HeaderBar></HeaderBar>
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
import HeaderBar from '../components/headerBar'
import { mapState,mapMutations} from 'vuex'

export default {
    components:{
        HeaderBar
    },
    computed:{
        ...mapState(["showNav"])
    },
    methods:{
        ...mapMutations(["SET_SHOW_NAV"])
    }
}
</script>

<style lang="less" scoped>
// scoped表示当前样式的作用域仅限当前组件
.index-container{
    height: 100%;
    display: flex;
    flex-direction: column;
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