import Vue from "vue"
import VueRouter from "vue-router"
Vue.use(VueRouter)

const routes = [
    {
        path: "/",
        redirect: { name: "icontext", }
    },
   
]
const router = new VueRouter({
    routes
})
export default router