import Vue from 'vue'
import VueRouter from 'vue-router'

//懒加载
const Show = () => import('../views/Show.vue')
const About = () => import('../components/About.vue')
const NotFound = () => import('../views/NotFound.vue')

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
        component: NotFound
      },
]

const router = new VueRouter({
    mode:'history',
    routes
})

export default router