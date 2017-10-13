import  News from './page/news.vue'
import  Home from './page/home.vue'
import  Detail from './page/detail.vue'

export default {
  routes:[
      {path:'/home',component:Home},
      {path:'/news',component:News,children:[
          {
            path:'detail',component:Detail
          }
      ]},
      {path:'*',redirect:'/home'}
  ]
}