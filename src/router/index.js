import Vue from 'vue'
import VueRouter from 'vue-router'

//懒加载
const Show = () => import('../views/Show.vue')
const About = () => import('../views/About.vue')

Vue.use(VueRouter)

const routes = [
    {
        path:'/',
        component:Show
    },
    {
        path:'/about',
        component:About
    },
    {
        path: '/:pathMatch(.*)*',
        component: Show
      },
]

const router = new VueRouter({
    mode:'history',
    routes
})

export default router