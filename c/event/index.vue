<template>
  <view>
    <button type="primary" @tap="handleEmit">触发监听</button>
    <button type="warn" @tap="handleOff">卸载监听</button>
  </view>
</template>

<script>

export default {
  data() {
    return {
    };
  },
  components: {
  },
  onShow() {
  },
  mounted () {
    uni.$on('testFunc', this.testFunc)
  },
  onHide() {
  },
  methods: {
    testFunc(data) {
      console.log('event页面收到数据:', data);
    },
    handleEmit() {
      uni.$emit('testFunc', {text: 'event页面的点击事件'})
    },
    handleOff() {
      uni.$off('testFunc')
    }
  },
  destroyed () {
    this.handleOff()
  }
};
</script>

<style lang="less">
  @import "./index.less";
</style>