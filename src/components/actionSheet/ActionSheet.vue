<template>
  <div class="nut-actionsheet">
    <transition :name="isAnimation ? 'nutFade' : ''" v-if="isShowMask">
      <div class="nut-actionsheet-mask" @click="clickActionSheetMask" v-show="isVisible"></div>
    </transition>
    <transition :name="isAnimation ? 'nutSlideUp' : ''">
      <div class="nut-actionsheet-panel" v-show="isVisible">
        <div class="nut-actionsheet-custom" slot-scope>
          <slot name="custom"></slot>
        </div>
        <dl class="nut-actionsheet-modal" v-if="$slots.title || $slots.subTitle">
          <dt class="nut-actionsheet-title"><slot name="title" slot-scope></slot></dt>
          <dd class="nut-actionsheet-sub-title"><slot name="sub-title" slot-scope></slot></dd>
        </dl>
        <ul class="nut-actionsheet-menu">
          <li
            class="nut-actionsheet-item"
            :class="{ 'nut-actionsheet-item-active': isHighlight(item), 'nut-actionsheet-item-disabled': item.disable }"
            v-for="(item, index) of menuItems"
            :key="index"
            @click="chooseItem(item, index)"
            >{{ item[optionTag] }}</li
          >
        </ul>
        <div class="nut-actionsheet-cancel" v-if="cancelTxt" @click="cancelActionSheet">{{ cancelTxt }}</div>
      </div>
    </transition>
  </div>
</template>
<script>
export default {
  name: 'nut-actionsheet',
  props: {
    isAnimation: {
      type: Boolean,
      default: true
    },
    isLockBgScroll: {
      type: Boolean,
      default: false
    },
    isVisible: {
      type: Boolean,
      default: false
    },
    isShowMask: {
      type: Boolean,
      default: true
    },
    isClickChooseClose: {
      type: Boolean,
      default: true
    },
    isClickCloseMask: {
      type: Boolean,
      default: true
    },
    cancelTxt: {
      type: String,
      default: ''
    },
    optionTag: {
      type: String,
      default: 'name'
    },
    chooseTagValue: {
      type: String,
      default: ''
    },
    menuItems: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {};
  },
  watch: {
    isVisible(value) {
      !!value && this.$emit('open');
      if (this.isLockBgScroll) {
        if (value) {
          document.body.classList.add('nut-overflow-hidden');
        } else {
          this.removeLockScroll();
        }
      }
    }
  },
  deactivated() {
    this.removeLockScroll();
  },
  destroyed() {
    this.removeLockScroll();
  },
  methods: {
    removeLockScroll() {
      document.body.classList.remove('nut-overflow-hidden');
    },
    isHighlight(item) {
      return (this.chooseTagValue && this.chooseTagValue == item[this.optionTag]) || this.chooseTagValue === 0;
    },

    closeActionSheet() {
      this.$emit('close');
    },

    cancelActionSheet() {
      this.closeActionSheet();
      this.$emit('cancel');
    },

    clickActionSheetMask() {
      this.isClickCloseMask && this.closeActionSheet();
    },

    chooseItem(item, index) {
      if (!item.disable) {
        if (this.isClickChooseClose) {
          this.closeActionSheet();
        }
        this.$emit('choose', item, index);
      }
    }
  }
};
</script>
<style lang="less" scoped>
@import '../../assets/css/index.less';
.nut-actionsheet-mask {
  .fix-fullscreen();
}
.nut-actionsheet-panel {
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  max-height: 80%;
  overflow: auto;
  z-index: @zindex-actionsheet;
  background-color: @body-background;
}
.nut-actionsheet-modal {
  padding: 10px;
  margin: 0;
  text-align: center;
  background-color: #fff;
  border-bottom: 1px solid @light-color;
  .nut-actionsheet-title,
  .nut-actionsheet-sub-title {
    padding: 5px 0;
  }
  .nut-actionsheet-title {
    font-size: @font-size-base;
    color: @title-color;
  }
  .nut-actionsheet-sub-title {
    font-size: @font-size-small;
    color: @title-color;
    margin-inline-start: 0px;
  }
}
.nut-actionsheet-menu {
  list-style: none;
  padding: 0;
  margin: 0;
}
.nut-actionsheet-cancel,
.nut-actionsheet-item {
  height: 44px;
  padding: 10px;
  line-height: 24px;
  font-size: @font-size-base;
  color: @title-color;
  text-align: center;
  background-color: #fff;
}
.nut-actionsheet-item {
  border-bottom: 1px solid @light-color;
}
.nut-actionsheet-item-active {
  color: @primary-color;
}
.nut-actionsheet-item-disabled {
  color: #e1e1e1;
}
.nut-actionsheet-cancel {
  margin-top: 5px;
  border-top: 1px solid @light-color;
}

</style>