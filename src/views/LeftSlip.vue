<template>
    <div class='component padding-15'>
      <div class="">文档说明地址： https://nutui.jd.com/#/leftslip</div>
      <div>
        <pre>
          Prop
          right-width	右侧按钮区域超出一行时的默认宽度，默认占整个宽度的80%	Number	0.8
          disabled	禁止滑动操作	Boolean	false
          --------------------------------------------------------------------------
          slot
          slip-main	列表主内容自定义区域	html	-
          slipbtns	左滑按钮自定义区域	html	-
          --------------------------------------------------------------------------
          methods
          restSlide	关闭单元格侧边栏	-	-
          openSlide	打开单元格侧边栏	-	-
        </pre>
      </div>
      <nut-leftslip ref='demo1'>
        <div slot="slip-main" class="slip-main">向左滑动我</div>
        <div slot="slipbtns" class="slipbtns"><a href="javascript:;" @click="delSlipItem">删除</a><a href="javascript:;" class="favorite">收藏</a></div>
      </nut-leftslip>
      <button @click="changeState">{{ state ? '异步关闭' : '异步打开' }}</button>
    </div>
</template>

<script>
import NutLeftslip from "../components/leftSlip/LeftSlip"

export default {
    name: 'LeftSlipView',
    components: {
      NutLeftslip
    },
    data() {
      return {
        state:false
      };
    },
    computed: {},
    watch: {},
    mounted() {
    },
    methods: {
      delSlipItem() {
        this.$refs.demo1.sliderEle.remove();
      },
      changeState() {
        if (this.state) {
            this.$refs.demo1.restSlide();
        } else {
            this.$refs.demo1.openSlide();
        }
        this.state = !this.state;
      }
    },
    beforeDestroy() {},
    destroyed() {}
}
</script>

<style lang='less' scoped>
.component {
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