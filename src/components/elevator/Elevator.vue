<template>
  <div class="nut-elevator" :style="{ height: wrapHeight + 'px' }" v-if="dataArray.length > 0">
    <div class="nut-main" :style="{ height: wrapHeight + 'px' }">
      <ul class="nut-elevator-ul" id="nut-elevator-ul">
        <li v-for="item in dataArray" v-bind:key="item.title" class="nut-list-title">
          <h3 class="nut-list-h" :id="item.title">{{ item.title }}</h3>
          <ul class="nut-people-list">
            <li
              v-for="(list, idx) in item.list"
              v-bind:key="idx"
              class="nut-list-name"
              :id="list.id ? list.id : 'list' + item.title + idx"
              @click="clickList(list, item)"
              >{{ list.name }}</li
            >
          </ul>
        </li>
      </ul>
      <ul
        class="nut-elevator-nav"
        id="nut-elevator-nav"
        @touchmove="onPointerMove($event)"
        @touchstart="onPointerMove($event)"
        @touchend="onPointerEnd($event)"
      >
        <li
          v-for="(item, index) in dataArray"
          v-bind:key="index"
          :id="'nav' + index"
          class="nut-nav-list"
          :style="{ height: navListHeight + 'px', lineHeight: navListHeight + 'px' }"
          @click="clickNav(item.title, index)"
          >{{ item.title }}</li
        >
      </ul>
      <template v-if="showIndicator">
        <div class="nut-big-box" v-show="currBox">
          {{ currTitle }}
        </div>
      </template>
    </div>
  </div>
</template>
<script>
export default {
  name: 'elevator',
  props: {
    otherHeight: {
      type: Number,
      default: 60
    },
    dataArray: {
      type: Array,
      required: true
    },
    navHeight: {
      type: Number,
      default: 40
    },
    hiddenTime: {
      type: Number,
      default: 10
    },
    showIndicator: {
      type: Boolean,
      default: true
    },
    initIndex: {
      type: Number,
      default: 0
    }
  },
  computed: {
    navListHeight: function() {
      return this.navHeight;
    }
  },
  data() {
    return {
      wrapHeight: '40',
      currTitle: '',
      currBox: false
    };
  },
  watch: {
    dataArray(val) {
      if (val.length > 0) {
        this.$nextTick(() => {
          this.initPage();
        });
      }
    }
  },
  mounted() {
    if (this.dataArray.length > 0) {
      this.initPage();
    }
  },
  methods: {
    initPage() {
      let innerHeight = document.documentElement.clientHeight;
      this.wrapHeight = innerHeight - this.otherHeight;
      let initIndex = this.dataArray[this.initIndex].title;
      document.getElementById(initIndex).scrollIntoView();
    },
    getStyle(element, attr) {
      if (element.currentStyle) {
        return element.currentStyle[attr];
      } else {
        return getComputedStyle(element, false)[attr];
      }
    },
    getFontSize() {
      let htmlDom = document.getElementsByTagName('html')[0];
      let bili = this.getStyle(htmlDom, 'fontSize');
      return bili.substring(0, bili.length - 2);
    },
    clickNav(title, index) {
      this.currBox = true;
      this.currTitle = title;
      setTimeout(() => {
        this.currBox = false;
      }, this.hiddenTime);
      this.moveFun(title, index);
    },
    clickList(list, item) {
      this.$emit('clickList', list, item);
    },
    moveFun(title) {
      let titleBox = document.getElementById(title);
      titleBox.scrollIntoView();
    },
    onPointerEnd(e) {
      let dataArrayLength = this.dataArray.length;
      let navHeight = document.getElementById('nut-elevator-nav').clientHeight;
      let navTop = document.getElementById('nut-elevator-nav').offsetTop;
      let navOffsetTop = navTop - navHeight / 2; //nav距离顶部的距离
      let eTop = e.type.indexOf('touch') !== -1 ? e.changedTouches[0].clientY : e.clientY;
      let navIndex = parseInt((eTop - navOffsetTop) / this.navHeight);
      setTimeout(() => {
        this.currBox = false;
      }, this.hiddenTime);
      if (navIndex < dataArrayLength && navIndex >= 0) {
        this.$emit('clickNav', this.dataArray[navIndex].title, navIndex);
      }
    },
    onPointerMove(e) {
      e.preventDefault();
      let dataArrayLength = this.dataArray.length;
      let navHeight = document.getElementById('nut-elevator-nav').clientHeight;
      let navTop = document.getElementById('nut-elevator-nav').offsetTop;
      let navOffsetTop = navTop - navHeight / 2; //nav距离顶部的距离
      let eTop = e.type.indexOf('touch') !== -1 ? e.touches[0].clientY : e.clientY;
      let navIndex = parseInt((eTop - navOffsetTop) / this.navHeight);
      if (navIndex < dataArrayLength && navIndex >= 0) {
        this.moveFun(this.dataArray[navIndex].title, navIndex);
        this.currBox = true;
        this.currTitle = this.dataArray[navIndex].title;
      }
    }
  }
};
</script>
<style lang="less" scoped>
.nut-elevator {
  position: relative;
  // top: 40px;
  width: 100%;
}
.nut-main {
  overflow: scroll;
  background: #fff;
  &::-webkit-scrollbar {
    display: none;
  }
}
.nut-elevator-ul {
  width: 100%;
  padding: 0px;
  margin: 0px;
}
.nut-list-title {
  list-style-type: none;
  width: 100%;
  //margin-bottom:20px;
}
.nut-list-h {
  font-weight: normal;
  height: 30px;
  line-height: 30px;
  padding-left: 20px;
  background: #f6f6f6;
  margin: 0px;
  font-size: 14px;
  color: #323233;
}
.nut-people-list {
  padding: 0px;
  padding-left: 20px;
}
.nut-list-name {
  font-size: 14px;
  color: #323233;
  list-style-type: none;
  height: 44px;
  line-height: 44px;
  position: relative;
  &:after {
    position: absolute;
    box-sizing: border-box;
    content: ' ';
    pointer-events: none;
    right: 0;
    bottom: 0;
    left: 16px;
    border-bottom: 1px solid #ebedf0;
    -webkit-transform: scaleY(0.5);
    transform: scaleY(0.5);
  }
  &:last-child {
    &:after {
      border-bottom: 0px;
    }
  }
}
.nut-elevator-nav {
  //background: #fff;
  text-align: center;
  //border:1px solid #ccc;
  width: 50px;
  font-size: 12px;
  position: fixed;
  top: 50%;
  right: 0px;
  transform: translate(0, -50%);
  padding: 0px;
  z-index: 100;
  .nut-nav-list {
    list-style-type: none;
    height: 40px;
    line-height: 40px;
  }
  .nut-nav-curr {
    color: rgb(7, 193, 96);
  }
}
.nut-big-box {
  width: 26px;
  height: 26px;
  background: #000;
  opacity: 0.7;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  line-height: 26px;
  color: #fff;
  font-family: bold;
}
</style>