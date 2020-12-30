<template>
  <view>
    <picker mode="date">小程序原生日历组件</picker>
    自定义日期组件
    <view>当前选择的日期： {{result}}</view>
    <button type="primary" @tap="openDate">打开自定日期组件</button>
    <uni-popup ref="uniPopup" type="bottom">
      <date-picker :valueIndex="valueIndex" @change="onChange"/>
    </uni-popup>
    <navigator url="/c/event/index">
      <button type="primary">跳转到event页面</button>
    </navigator>
    <!-- #ifdef MP-WEIXIN-->
    当前页面是微信页面
    <!-- #endif -->
    <!-- #ifdef MP-BAIDU-->
    当前页面是百度页面
    <!-- #endif -->
  </view>
</template>

<script>
import range from '../utils/range';
import datePicker from './date-picker';
import { uniPopup } from '@dcloudio/uni-ui';

export default {
  data() {
    return {
      result: '未选择',
      valueIndex: [1, 2, 3],
    };
  },
  components: {
    datePicker,
    uniPopup,
  },
  onShow() {
  },
  mounted () {
    uni.$on('testFunc', this.testFunc)
  },
  onHide() {
  },
  onShareAppMessage() {
  },
  methods: {
    testFunc(data) {
      console.log('demo页面收到数据', data);

    },
    onChange(text) {
      this.result = text;
    },
    openDate() {
      this.$refs.uniPopup.open();
    }
  }
};
</script>

<style lang="less">
  @import "./index.less";
</style>