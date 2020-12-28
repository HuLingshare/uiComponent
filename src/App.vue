<!--
 * @Author: your name
 * @Date: 2020-09-29 17:52:52
 * @LastEditTime: 2020-12-22 16:12:17
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \Doc\exercise\vuetest\src\App.vue
-->
<template>
  <div id="app">
    <transition name="router-fade" mode="out-in">
			<keep-alive>
        <router-view v-if="$route.meta.keepAlive"></router-view>
			</keep-alive>
    </transition>
    <transition name="router-fade" mode="out-in">
      <router-view v-if="!$route.meta.keepAlive"></router-view>
    </transition>
  </div>
</template>

<style lang="less">
  @import './assets/css/common';
	.router-fade-enter-active, .router-fade-leave-active {
    transition: opacity .3s;
	}
	.router-fade-enter, .router-fade-leave-active {
    opacity: 0;
	}
</style>
