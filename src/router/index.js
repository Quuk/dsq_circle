import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

// 解决elementUI在router3.0版本重复点击报错
const originalPush = Router.prototype.push;
Router.prototype.push = function push(location) {
    return originalPush.call(this, location).catch(err => err)
}

const router = new Router({
    routes: [{
        path: '/',
        component: () => import('~/pages/full_page')
    }, {
        path: '/page',
        name: 'page',
        component: () => import('~/pages/content_page')
    }]
})
export default router