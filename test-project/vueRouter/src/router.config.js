import  App from 'App.vue'
import  News from './page/news.vue'
import  Home from './page/home.vue'
import  Detail from './page/detail.vue'

export default [{
    mode: 'history',
    routes: [
        {
            path: '/',
            component: App, //顶层路由，对应index.html
            children: [  //二级路由，对应App.vue
                {
                    path: '',
                    redirect: '/home'  //地址为空时跳转到home.vue
                },
                {
                    path: '/home',
                    component: Home
                },
                {
                    path: '/news',
                    component: News,
                    children: [
                      {
                          path: 'detail',
                          component: Detail
                      }
                    ]
                }
            ]
        }
    ]
}]