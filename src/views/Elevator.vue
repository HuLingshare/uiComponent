<template>
    <div class='elevator padding-15'>
      <div>文档说明地址： https://nutui.jd.com/#/elevator</div>
      <div>
        <pre>
          
          prop
          dataArray	渲染楼层数据，为必填项	Array	[]	--
          showIndicator	是否显示索引值提示符	Boolean	--	--
          hiddenTime	索引值提示符显示的时间，单位ms	Number	500	--
          navHeight	索引栏每个索引区域的高度，单位px	Number	40	--
          initIndex	进入页面后，当前定位到的索引值	Number	0	--
          otherHeight	显示组件区域外部的高度，比如title区域高度，单位px	Number	40	--
          ----------------------------------------
          event
          clickNav	点击/离开索引栏时的回调函数	返回点击的索引值和title
          clickList	点击左侧列表时的回调函数	返回点击的对象数据和所在区域的对象数据

        </pre>
      </div>
      <nut-elevator 
        :dataArray="dataList"  
        :showIndicator="true"
        :navHeight="40"
        :otherHeight="60"
        :initIndex="0" 
        :hiddenTime='500'
        @clickNav="clickNav"
        @clickList="clickList"
        >
      </nut-elevator>
    </div>
</template>

<script>
import NutElevator from "@/components/elevator/Elevator.vue"
export default {
    name: 'ElevatorView',
    components: {
      NutElevator
    },
    data() {
      return {
        dataList:[
            {
              title:"A",
              list:[//可以为空数组
                {
                  name:'安其拉',
                  id:'a1'//id字段可以没有
                },
                {
                  name:'安琪',
                  id:'a2'
                },
                {
                  name:'安其拉1',
                  id:'a111'//id字段可以没有
                },
                {
                  name:'安琪1',
                  id:'a211'
                },
                {
                  name:'安其拉11',
                  id:'a1111'//id字段可以没有
                },
                {
                  name:'安琪11',
                  id:'a2111'
                }
              ]
            },    
            {
              title:"B",
              list:[//可以为空数组
                {
                  name:'Baby',
                  id:'a11'//id字段可以没有
                },
                {
                  name:'BABAs',
                  id:'a21'
                }
              ]
            }    
        ]
      };
    },
    computed: {},
    watch: {},
    methods: {
      clickNav() {
        
      },
      clickList() {
        
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
.elevator {
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