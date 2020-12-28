<template>
    <div class='toast padding-15'>
      <div class="">文档说明地址： https://nutui.jd.com/#/toast</div>
      <div>
        <pre>
          API
          Toast.text	展示文字提示	options/message	toast 实例
          Toast.loading	展示加载提示	options/message	toast 实例
          Toast.success	展示成功提示	options/message	toast 实例
          Toast.fail	展示失败提示	options/message	toast 实例
          Toast.warn	展示警告提示	options/message	toast 实例
          Toast.hide	关闭提示	force:boolean	void
          Toast.setDefaultOptions	修改默认配置，对所有 Toast 生效
          传入 type 可以修改指定类型的默认配置	type/options	void
          Toast.resetDefaultOptions	重置默认配置，对所有 Toast 生效
          传入 type 可以重置指定类型的默认配置	type	void
          --------------------------------------------------------------------------
          options
          msg	消息文本内容,支持传入HTML	String/VNode	""
          id	标识符，相同者共用一个实例
          loading类型默认使用一个实例，其他类型默认不共用	String/Number	-
          duration	展示时长（毫秒）
          值为 0 时，toast 不会自动消失（loading类型默认为0）	Number	2000
          center	是否展示在页面中部（为false时展示在底部）	Boolean	true
          bottom	距页面底部的距离（像素），option.center为false时生效	Number	30
          textAlignCenter	多行文案是否居中	Boolean	true
          bgColor	背景颜色（透明度）	String	"rgba(46, 46, 46, 0.7)"
          customClass	自定义类名	String	""
          icon	自定义图标，支持图片链接或base64格式	String	""
          size	文案尺寸，small/base/large三选一	String	"base"
          cover	是否显示遮罩层，loading类型默认显示	Boolean	loading类型true/其他类型false
          coverColor	遮罩层颜色，默认透明	String	"rgba(0,0,0,0)"
          loadingRotate	loading图标是否旋转，仅对loading类型生效	Boolean	true
          onClose	关闭时触发的事件	function	null
          closeOnClickOverlay	是否在点击遮罩层后关闭提示	Boolean	false
          toastStyle	提示框style	object	{}
          toastClass	提示框class	String	""
        </pre>
      </div>
      <div class="openDialog" @click="showToast">toast基本用法</div>
    </div>
</template>

<script>
// import MyDialog from "@/components/dialog/dialog.vue"

export default {
    name: 'Dialog',
    components: {
      // MyDialog
    },
    data() {
      return {
      };
    },
    computed: {},
    watch: {},
    mounted() {
    },
    methods: {
      showToast() {
        this.$toast.text('提示信息', {
          duration: 1000
        });
      },
    },
    beforeDestroy() {},
    destroyed() {}
}
</script>

<style lang='less' scoped>
.toast {
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