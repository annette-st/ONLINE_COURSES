import Vue from 'vue'
import VueRouter from 'vue-router'
import Course from 'pages/Course.vue'
import Catalog from 'pages/Catalog.vue'
import Calendar from "pages/Calendar.vue";

Vue.use(VueRouter)

const routes = [
    { path: "/course*", component: Course},
    { path: "/catalog", component: Catalog},
    { path: "/calendar", component: Calendar }
]

export default new VueRouter({
    mode: 'history',
    routes
})