<template>
    <div class='drag padding-15'>
      <div>文档说明地址： https://nutui.jd.com/#/drag</div>
      <div>
        <pre>

          prop

          attract	是否开启自动吸边	Boolean	false
          direction	拖拽元素的拖拽方向限制，x/y/all三选一	String	'all'
          z-index	拖拽元素的堆叠顺序	Number, String	11
          boundary	拖拽元素的拖拽边界	Object	{top: 0,left: 0,right: 0,bottom: 0}
          
        </pre>
      </div>
      <nut-drag @click.native="click">
        <div class="touch-dom">可点击，可拖拽</div>
      </nut-drag>
    </div>
</template>

<script>
import NutDrag from "@/components/drag/Drag.vue"
export default {
    name: '',
    components: {
      NutDrag
    },
    data() {
      return {

      };
    },
    computed: {},
    watch: {},
    methods: {

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
.drag {
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