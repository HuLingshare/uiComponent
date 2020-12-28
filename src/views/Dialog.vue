<template>
    <div class='dialog padding-15'>
      <div class="">文档说明地址： https://nutui.jd.com/#/dialog</div>
      <div>
        <pre>

          属性
          id	标识符，相同者共享一个实例	String/Number	nut-dialog-default-id
          canDestroy	是否关闭弹窗时销毁实例	Boolean	true
          title	标题	String	-
          content	内容，支持HTML	String	-
          type	弹窗类型，值为image时为图片弹窗	String	-
          closeOnClickModal	点击蒙层是否关闭对话框	Boolean	true
          noFooter	是否隐藏底部按钮栏	Boolean	false
          noOkBtn	是否隐藏确定按钮	Boolean	false
          noCancelBtn	是否隐藏取消按钮	Boolean	false
          cancelBtnTxt	取消按钮文案	String	”取 消“
          okBtnTxt	确定按钮文案	String	”确 定“
          okBtnDisabled	禁用确定按钮	Boolean	false
          cancelAutoClose	取消按钮是否默认关闭弹窗	Boolean	true
          textAlign	文字对齐方向，可选值同css的text-align	String	"center"
          maskBgStyle	遮罩层样式（颜色、透明度）	String	-
          customClass	增加一个自定义class	String	-
          link	点击图片跳转的Url，仅对图片类型弹窗有效	String	-
          imgSrc	图片Url，仅对图片类型弹窗有效	String	-
          animation	是否开启默认动效	Boolean	true
          closeOnPopstate	是否在页面回退时自动关闭	Boolean	false
          lockBgScroll	锁定遮罩层滚动，不影响弹窗内部滚动（实验性质）会给body添加posotion:fix属性，注意	Boolean	false

          事件
          onOkBtn	确定按钮回调	Function	-
          onCancelBtn	取消按钮回调	Function	-
          onCloseBtn	关闭按钮回调	Function	-
          closeCallback	关闭回调，任何情况关闭弹窗都会触发	Function	-
          onClickImageLink	图片链接点击回调，仅对图片类型弹窗有效	Function	-
          closed	关闭dialog	Function	-
        </pre>
      </div>
      <div class="openDialog" @click="openDialog">打开弹窗</div>
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
      openDialog() {
        this.$dialog({
          title: "确定删除此订单？",
          content: "删除后将从你的记录里消失，无法找回"
        })
      }
    },
    beforeDestroy() {},
    destroyed() {}
}
</script>

<style lang='less' scoped>
.dialog {
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