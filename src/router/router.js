import Vue from 'vue'
import Router from 'vue-router'
import homePage from "~/App";
import contentPage from "~/pages/content_page";

Vue.use(Router)

export const router_value = [
    {path: '/', component: homePage},
    {path: '/page', component: contentPage}
]

const router = new Router({
    router_value,
    mode: 'history'
})
export default router