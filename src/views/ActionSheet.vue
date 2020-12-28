<template>
    <div class='actionSheet padding-15'>
      <div>文档说明地址： https://nutui.jd.com/#/actionsheet</div>
      <div>
        <pre>

          属性
          is-animation	是否开启动画	Boolean	true
          is-lock-bg-scroll	是否锁定背景滚动	Boolean	false
          is-visible	是否可见	Boolean	false
          is-show-mask	是否显示背景遮罩	Boolean	true
          is-click-choose-close	是否点击列表项后立即关闭	Boolean	true
          is-click-close-mask	是否点击mask蒙层关闭	Boolean	true
          cancel-txt	取消文案	String	'取消'
          choose-tag-value	已选值，如果填写，高亮显示	String	-
          menu-items	列表项	Array	[ ]
          option-tag	设置列表项展示使用参数	String	'name'

          slot
          custom	自定义内容
          title	自定义标题
          subTitle	自定义副标题

          事件
          choose	选择之后触发	选中列表项
          close	关闭时触发	无
          cancel	点击取消文案时触发	无
        </pre>
      </div>

      <div @click="switchActionSheet">
          <span class="title"><label>性别</label></span>
          <span class="selected-option"></span>
      </div>
      <nut-actionsheet :is-visible="isVisible" 
          @close="switchActionSheet"
          :menu-items="menuItems"
          @choose="chooseItem"
          :chooseTagValue="sex"
          cancelTxt="取消"
      ></nut-actionsheet>
    </div>
</template>

<script>
import NutActionsheet from "@/components/actionSheet/ActionSheet.vue"
export default {
    name: 'ActionSheetView',
    components: {
      NutActionsheet
    },
    data() {
      return {
        sex: '请选择',
        isVisible: false,
        menuItems: [
            {
                'name': '男',
                'value': 0
            },
            {
                'name': '女',
                'value': 1
            }
        ]
      };
    },
    computed: {},
    watch: {},
    methods: {
        switchActionSheet() {
            this.isVisible = !this.isVisible;
        },

        chooseItem(itemParams) {
            this.sex = itemParams.name;
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
.actionSheet {
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