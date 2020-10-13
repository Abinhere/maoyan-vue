import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from '../views/index.vue'
import City from '../views/city.vue'
import Movie from '../views/movie/movie.vue'
import Theater from '../views/theater/theater.vue'
import Profile from '../views/profile/profile.vue'
import Hotshowing from '../views/movie/hotshowing.vue'
import Comingsoon from '../views/movie/comingsoon.vue'
Vue.use(VueRouter)

const originVueRouter = VueRouter.prototype.push;
VueRouter.prototype.push = function (location,onComplete,onAbort){
  return originVueRouter.call(this,location,()=>{})
}

const routes = [
  {
    path:'/',
    redirect:"/index/movie/hotshowing"
  },
  {
    path: '/index',
    name: 'index',
    component: Index,
    children:[
      // 电影
      {
        path:'/index/movie',//绝对路径 或相对路径都行
        component:Movie,
        redirect:"/index/movie/hotshowing",
        children:[
          {
            path:'hotshowing',//相对路径 等于 /index/movie/hotshowing
            component:Hotshowing
          },
          {
            path:'comingsoon',//相对路径 等于 /index/movie/hotshowing
            component:Comingsoon
          },
        ]
      },
      // 影院
      {
        path:'/index/theater',
        component:Theater,
      },
      //我的
      {
        path:'/index/profile',
        component:Profile,
      },
    ]
  },
  {
    path: '/city',
    name: 'city',
    component: City
  },

]

const router = new VueRouter({
  routes
})

export default router
