<template>
  <div :class="['nut-backtop', { show: backTop }]" :style="styles" @click.stop="click">
    <slot>
      <div class="nut-backtop-main"></div>
    </slot>
  </div>
</template>
<script>
export default {
  name: 'nut-backtop',
  props: {
    distance: {
      type: Number,
      default: 200
    },
    bottom: {
      type: Number,
      default: 20
    },
    right: {
      type: Number,
      default: 10
    },
    duration: {
      type: Number,
      default: 1000
    },
    isAnimation: {
      type: Boolean,
      default: true
    },
    elId: {
      type: String,
      default: ''
    },
    zIndex: {
      type: Number,
      default: 1111
    }
  },
  data() {
    return {
      backTop: false,
      scrollEl: window
    };
  },
  mounted() {
    this.init();
  },

  activated() {
    if (this.keepAlive) {
      this.keepAlive = false;
      this.init();
    }
  },

  deactivated() {
    this.keepAlive = true;
    this.removeEventListener();
  },

  destroyed() {
    this.removeEventListener();
  },

  computed: {
    styles() {
      return {
        bottom: `${this.bottom}px`,
        right: `${this.right}px`,
        'z-index': this.zIndex
      };
    }
  },
  methods: {
    addEventListener() {
      this.scrollEl.addEventListener('scroll', this.scrollListener, false);
      this.scrollEl.addEventListener('resize', this.scrollListener, false);
    },
    removeEventListener() {
      this.scrollEl.removeEventListener('scroll', this.scrollListener, false);
      this.scrollEl.removeEventListener('resize', this.scrollListener, false);
    },
    requestAniFrame() {
      return (
        window.requestAnimationFrame ||
        window.webkitRequestAnimationFrame ||
        window.mozRequestAnimationFrame ||
        function(callback) {
          window.setTimeout(callback, 1000 / 60);
        }
      );
    },
    initCancelAniFrame() {
      let vendors = ['webkit', 'moz'];
      for (let x = 0; x < vendors.length && !window.requestAnimationFrame; ++x) {
        window.cancelAnimationFrame = window[vendors[x] + 'CancelAnimationFrame'] || window[vendors[x] + 'CancelRequestAnimationFrame'];
      }
    },
    init() {
      if (this.elId && document.getElementById(this.elId)) {
        this.scrollEl = document.getElementById(this.elId);
      }
      this.addEventListener();
      this.initCancelAniFrame();
    },
    scrollListener() {
      this.scrollTop = this.scrollEl.pageYOffset !== undefined ? this.scrollEl.pageYOffset : this.scrollEl.scrollTop;
      this.backTop = this.scrollTop >= this.distance;
    },
    click() {
      this.startTime = +new Date();
      this.isAnimation && this.duration > 0 ? this.scrollAnimation() : this.scroll();
      this.$emit('click');
    },
    scrollAnimation() {
      const self = this;
      var cid = self.requestAniFrame()(function fn() {
        var t = self.duration - Math.max(0, self.startTime - +new Date() + self.duration);
        var y = (t * -self.scrollTop) / self.duration + self.scrollTop;
        self.scroll(y);
        cid = self.requestAniFrame()(fn);
        if (t == self.duration || y == 0) {
          window.cancelAnimationFrame(cid);
        }
      });
    },
    scroll(y = 0) {
      if (this.scrollEl === window) {
        window.scrollTo(0, y);
      } else {
        this.scrollEl.scrollTop = y;
      }
    }
  }
};
</script>
<style lang="less" scoped>
.nut-backtop {
  display: none;
  line-height: 0;
  position: fixed;
  cursor: pointer;
  bottom: 20px;
  right: 10px;
  z-index: 1111;
  &.show {
    display: block;
  }
  &-main {
    transition: all 0.2s ease-in-out;
    width: 38px;
    height: 38px;
    background: #fff
      url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 31 39'%3E%3Cg fill-rule='evenodd'%3E%3Cpath d='M1.41 0C.63 0 0 .672 0 1.5S.63 3 1.41 3h28.18C30.37 3 31 2.328 31 1.5S30.369 0 29.59 0H1.41zM17 7.5a1.5 1.5 0 0 0-3 0v30a1.5 1.5 0 1 0 3 0v-30zM8.44 12.44l-8 8a1.5 1.5 0 1 0 2.12 2.12l8-8a1.5 1.5 0 1 0-2.12-2.12z'/%3E%3Cpath d='M16.56 6.44l14 14a1.5 1.5 0 1 1-2.12 2.12l-14-14a1.5 1.5 0 1 1 2.12-2.12z'/%3E%3C/g%3E%3C/svg%3E")
      no-repeat center;
    background-size: 20px 20px;
    border-radius: 50%;
    border: 2px solid rgba(180, 180, 180, 0.5);
    box-shadow: 0px 0px 2px 3px rgba(220, 220, 220, 0.1);
  }
  i {
    color: #fff;
    font-size: 24px;
    padding: 8px 12px;
    line-height: 0;
  }
}

</style>
