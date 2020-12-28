<template>
    <div class='component padding-15'>
      <div>文档地址： </div>
      <div>
        <pre>

          Prop

          name	input name的名称	String	""
          url	上传服务器的接口地址	String	-
          multiple	是否支持多选	Boolean	false
          isPreview	是否需要预览	Boolean	false
          clearInput	是否需要清空input内容，设为true支持重复选择上传同一个文件	Boolean	false
          maxSize	可以设定最大上传文件的大小（字节）	Number	5242880
          acceptType	可以上传文件的类型	Array	['image/jpeg', 'image/png', 'image/gif', 'image/bmp']
          attach	附加上传的信息formData	Object	{}
          headers	自定义headers	Object	{}
          xhrState	接口响应的成功状态（status）值	Number	200
          typeError	文件类型错误提示文案	String	"不支持上传该类型文件"
          limitError	文件大小超过限制提示文案	String	"文件大小超过限制"
          xmlError	浏览器不支持本组件时的提示文案	String	"对不起，您的浏览器不支持本组件！"
          withCredentials	支持发送 cookie 凭证信息	Boolean	fasle
          beforeUpload	上传前的函数需要返回一个对象	Function	{event:$event} $event为点击事件必传
          selfData	自定义增加上传的数据	Object	{}
          ------------------------------------------------------------------------------------------

          Event

          start	文件上传开始	-
          progress	文件上传的进度	上传文件、已上传数据量、总数据量
          preview	isPreview为true时可通过此方法获文件的Base64编码，一般用于预览	文件的Base64编码
          success	上传成功	文件、responseText
          failure	上传失败	文件、responseText
          showMsg	组件抛出信息的处理函数	组件抛出的提示信息
          
        </pre>
      </div>
      <nut-uploader
        :name="name"
        :url="url"
        :multiple="true"
        :xhrState="stateNum"
        :isPreview="true"
        @success="demoSuccess"
        @fail="demoFail"
        @preview="preview"
        @showMsg="showMsg1"
      >
        <button style="margin-bottom: 10px;">上传</button>
      </nut-uploader>
      <div class="picCell_Wrap">
        <div class="picCell" v-for="(it, index) in previewImg" :key="index">
          <img :src="it" alt="">
        </div>
      </div>
    </div>
</template>

<script>
import NutUploader from "@/components/uploader/Uploader.vue"
export default {
    name: '',
    components: {
      NutUploader
    },
    data() {
      return {
        name: 'pic',
        url: 'https://my-json-server.typicode.com/linrufeng/demo/posts',
        stateNum: 200,
        previewImg: []
      };
    },
    computed: {},
    watch: {},
    methods: {
      demoSuccess(data) {
        console.log('success data=>', data)
      },
      demoFail(data) {
        console.log('fail data=>', data)

      },
      showMsg1(data) {
        console.log('showmsg data=>', data)
      },
      preview(file) {
        this.previewImg = file;
        console.log(file)
      },
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
.picCell_Wrap {
  display: flex;
}
.picCell {
  width: 25%;
  padding: 10px;
  background: #ddd;
  border: 1px dotted darkgreen;
  img {
    width: 100%;
    height: 100%;
  }
}
</style>