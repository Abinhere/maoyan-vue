<template>
    <div class="down-container">
        <img src="http://s0.meituan.net/bs/?f=myfe/canary:/asgard/images/avatar.png" alt="">
        <div class="desc">
            <h3>猫眼</h3>
            <span>在线选座，热门影讯，爱上看电影</span>
        </div>
        <div class="btn-wrapper">
            <button>
                立即打开
            </button>
        </div>
    </div>
</template>
<style lang="less" scoped>
@import "../assets/style/mixin.less";
.down-container{
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 8px 15px;
    box-sizing: border-box;
    height: 64px;
    .border_1px(#d8d8d8);
    img{
        width: 38px;
    }
    .desc{
        flex: 1;
        padding-left: 5px;
        h3{
            font-size: 17px;
            color: #222;
            font-weight: 300;
        }
        span{
            font-size: 13px;
            color: #ccc;
        }
    }
    .btn-wrapper{
        flex-basis: 75px;
        button{
            line-height: 25px;
            background: #f03d37;
            border-radius: 6px;
            text-align: center;
            color: white;
            width: 70px;
        }
    }
}
</style>