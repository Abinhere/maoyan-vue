<template>
    <div class="header">
        <!-- 这个插槽用来放左箭头 -->
        <slot name="back"></slot>
        <h1>
            猫眼电影
        </h1>
        <div class="nav">
            <span @click.stop="SET_SHOW_NAV(!showNav)">...</span>
            <ul v-if="showNav">
                <li @click="go('/index/movie/hotshowing')">
                    电影
                </li>
                <li @click="go('/index/theater')">
                    影院
                </li>
                <li @click="go('/index/profile')">
                    我的
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
import {mapMutations, mapState} from 'vuex'
export default {
    data(){
        return{
        }
    },
    computed:{
        ...mapState(['showNav'])
    },
    methods:{
        ...mapMutations(['SET_SHOW_NAV']),
        go(url){
            this.$router.push(url)
            this.showNav = !this.showNav
        }
    }
}
</script>

<style lang="less" scoped>
    .header{
        height: 50px;
        background: #e54847;
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: center;
        h1{
            font-size: 18px;
            color: white;
            flex: 1;
            font-weight: 300;
        }
        .nav{
            width: 50px;
            font-size: 25px;
            color: white;
            height: 50px;
            position: relative;
            ul{
                position: absolute;
                top: 50px;
                right: 0px;
                background: white;
                width: 50px;
                li{
                    color: #333;
                    font-size: 15px;
                }
            }
        }
    }
</style>