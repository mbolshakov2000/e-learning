import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/HomeView.vue'
import Section1 from '../views/Section1.vue'
import Section2 from '../views/Section2.vue'
import Section3 from '../views/Section3.vue'
import FinalTest from '../views/FinalTest.vue'
import FinalTask from '../views/FinalTask.vue'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/section1',
        name: 'Section1',
        component: Section1
    },
    {
        path: '/section2',
        name: 'Section2',
        component: Section2
    },
    {
        path: '/section3',
        name: 'Section3',
        component: Section3
    },
    {
        path: '/finalTest',
        name: 'FinalTest',
        component: FinalTest
    },
    {
        path: '/finalTask',
        name: 'FinalTask',
        component: FinalTask
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router