<template>
    <div class='backTop padding-15'>
      <div>文档说明地址： https://nutui.jd.com/#/backtop</div>
      <div>
        <pre>

          属性
          distance	“页面垂直方向滚动高度”后出现	Number	200
          is-animation	是否有动画,和duration参数互斥	Boolean	true
          duration	设置动画持续时间	Number	1000
          z-index	设置层级	Number	1111
          el-id	设置滚动事件监听的容器id	String	-
          right	设置离页面右边距离	Number	30
          bottom	设置离页面底部距离	Number	30

          事件
          click
        </pre>
      </div>

      <div>
        <pre>
          《再别康桥》
          
          徐志摩

          轻轻的我走了，正如我轻轻的来；

          我轻轻的招手，作别西天的云彩。

          那河畔的金柳，是夕阳中的新娘；

          波光里的艳影，在我的心头荡漾。

          软泥上的青荇，油油的在水底招摇；

          在康桥的柔波里，

          我甘心做一条水草！

          那榆荫下的一潭，

          不是清泉，是天上虹

          揉碎在浮藻间，沉淀着彩虹似的梦。

          寻梦？撑一支长蒿，

          向青草更青处漫溯，

          满载一船星辉，在星辉斑斓里放歌。

          但我不能放歌，悄悄是别离的笙箫；

          夏虫也为我沉默，沉默是今晚的康桥！

          悄悄的我走了，正如我悄悄的来；

          我挥一挥衣袖，不带走一片云彩。
        </pre>
      </div>
      <div>
        <pre>
          《再别康桥》

          徐志摩

          轻轻的我走了，正如我轻轻的来；

          我轻轻的招手，作别西天的云彩。

          那河畔的金柳，是夕阳中的新娘；

          波光里的艳影，在我的心头荡漾。

          软泥上的青荇，油油的在水底招摇；

          在康桥的柔波里，

          我甘心做一条水草！

          那榆荫下的一潭，

          不是清泉，是天上虹

          揉碎在浮藻间，沉淀着彩虹似的梦。

          寻梦？撑一支长蒿，

          向青草更青处漫溯，

          满载一船星辉，在星辉斑斓里放歌。

          但我不能放歌，悄悄是别离的笙箫；

          夏虫也为我沉默，沉默是今晚的康桥！

          悄悄的我走了，正如我悄悄的来；

          我挥一挥衣袖，不带走一片云彩。
        </pre>
      </div>

      <nut-backtop 
        @click="onClick"
      >
      </nut-backtop>
    </div>
</template>

<script>
import NutBacktop from "@/components/backTop/BackTop.vue"
export default {
    name: 'BackTopView',
    components: {
      NutBacktop
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