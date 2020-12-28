/*
 * @Author: your name
 * @Date: 2020-09-29 17:52:52
 * @LastEditTime: 2020-12-23 14:32:58
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: \Doc\exercise\vuetest\src\router\index.js
 */
import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '', // 地址为空时跳转到home
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'Home',
    component: Home
  },
  {
    path: '/dialog',
    name: 'Dialog',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import('../views/Dialog.vue')
  },
  {
    path: '/toast',
    name: 'Toast',
    component: () => import('../views/Toast.vue')
  },
  {
    path: '/actionSheet',
    name: 'ActionSheet',
    component: () => import('../views/ActionSheet.vue')
  },
  {
    path: '/backTop',
    name: 'BackTop',
    component: () => import('../views/BackTop.vue')
  },
  {
    path: '/leftSlip',
    name: 'LeftSlip',
    component: () => import('../views/LeftSlip.vue')
  },
  {
    path: '/uploader',
    name: 'Uploader',
    component: () => import('../views/Uploader.vue')
  },
  {
    path: '/drag',
    name: 'Drag',
    component: () => import('../views/Drag.vue')
  },
  {
    path: '/noticebar',
    name: 'Noticebar',
    component: () => import('../views/Noticebar.vue')
  },
  {
    path: '/elevator',
    name: 'Elevator',
    component: () => import('../views/Elevator.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
