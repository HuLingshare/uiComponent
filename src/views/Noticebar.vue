<template>
    <div class='backTop padding-15'>
      <div>文档说明地址： https://nutui.jd.com/#/backtop</div>
      <div>
        <pre>
          
          prop
          text	提示的信息	String	空
          closeMode	是否启用关闭模式	Boolean	false
          leftIcon	close为没有左边icon,其他为自定义的图片链接，没有为默认图片	String	空
          color	导航栏的文字颜色	String	空
          background	导航栏的背景颜色	String	空
          delay	延时多少秒	String/Number	1
          scrollable	是否可以滚动	Boolean	true
          speed	滚动速率 (px/s)	Number	50
          ----------------------------------------
          event
          click	外层点击事件回调	event: Event
          close	关闭通知栏时触发	event: Event

        </pre>
      </div>
      <nut-noticebar
        text="华为畅享9新品即将上市，活动期间0元预约可参与抽奖，赢HUAWEI WATCH等好礼，更多产品信息请持续关注！"
      ></nut-noticebar>
    </div>
</template>

<script>
import NutNoticebar from "@/components/noticebar/Noticebar.vue"
export default {
    name: 'BackTopView',
    components: {
      NutNoticebar
    },
    data() {
      return {
      };
    },
    computed: {},
    watch: {},
    methods: {
      onClick() {
        
      }
    },
    created() {

    },
    mounted() {

    },
    beforeDestroy() {},
    destroyed() {}
}
</script>

<style lang='less' scoped>
.backTop {
  font-size: 12px;
}
pre {
  background: #333;
  color: #fff;
  font-family: 'PingFang SC';
  width: 100%;
  overflow: auto;
}
</style>