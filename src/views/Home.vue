<!--
 * @Author: your name
 * @Date: 2020-09-29 17:52:52
 * @LastEditTime: 2020-12-23 14:28:18
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \Doc\exercise\vuetest\src\views\Home.vue
-->
<template>
  <div class="home">
    <div class="nav">
      <router-link to="/dialog">Dialog<i class="icon iconfont icon-next"></i></router-link>
      <router-link to="/toast">Toast<i class="icon iconfont icon-next"></i></router-link>
      <router-link to="/actionSheet">ActionSheet<i class="icon iconfont icon-next"></i></router-link>
      <router-link to="/backTop">BackTop<i class="icon iconfont icon-next"></i></router-link>
      <router-link to="/leftSlip">LeftSlip<i class="icon iconfont icon-next"></i></router-link>
      <router-link to="/uploader">Uploader<i class="icon iconfont icon-next"></i></router-link>
      <router-link to="/drag">Drag<i class="icon iconfont icon-next"></i></router-link>
      <router-link to="/noticebar">Noticebar<i class="icon iconfont icon-next"></i></router-link>
      <router-link to="/elevator">Elevator<i class="icon iconfont icon-next"></i></router-link>
      <router-link to="/home">下面的待完成<i class="icon iconfont icon-next"></i></router-link>
      <router-link to="/home">Switch<i class="icon iconfont icon-next"></i></router-link>
      <router-link to="/home">Slider<i class="icon iconfont icon-next"></i></router-link>
      <router-link to="/home">Radio<i class="icon iconfont icon-next"></i></router-link>
      <router-link to="/home">Checkbox<i class="icon iconfont icon-next"></i></router-link>
      <router-link to="/home">ShortPassword<i class="icon iconfont icon-next"></i></router-link>
      <router-link to="/home">Input<i class="icon iconfont icon-next"></i></router-link>
      <router-link to="/home">Swipter<i class="icon iconfont icon-next"></i></router-link>
      <router-link to="/home">Scroller<i class="icon iconfont icon-next"></i></router-link>
      <router-link to="/home">CountDown<i class="icon iconfont icon-next"></i></router-link>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'Home',
  components: {
  },
  data() {
    return {
      src1: "../static/logo.png"
    }
  }
}
</script>

<style lang="less" scoped>
  .nav {
    width: 100%;
    padding: 15px;
    display: flex;
    flex-flow: column nowrap;
    justify-content: space-between;
    a {
      display: flex;
      justify-content: space-between;
      align-items: center;
      background: #fff;
      height: 40px;
      line-height: 40px;
      border-radius: 20px;
      margin-bottom: 15px;
      padding: 0 20px;
    }
  }
</style>
