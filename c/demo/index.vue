<template>
  <view>
    DatePicker示例
    <DatePicker :value="date"/>
    <button @click="open">打开DatePicker弹窗</button>
    <uni-popup ref="popup" type="bottom">
      <DatePicker :value="date"/>
    </uni-popup>
  </view>
</template>

<script>
import DatePicker from './date-picker.vue';
import { uniPopup } from '@dcloudio/uni-ui'

export default {
  data() {
    return {
      date: [1, 2, 3]
    };
  },
  components: {
    DatePicker,
    uniPopup,
  },
  onShow() {
  },
  mounted () {
  },
  onHide() {
  },
  onShareAppMessage() {
  },
  methods: {
    open(){
        this.$refs.popup.open()
    }
  }
};
</script>

<style lang="less">
  @import "./index.less";
</style>