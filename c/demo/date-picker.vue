<template>
  <view class="date-picker-container">
    <picker-view class="date-picker" :value="value" @change="onChange">
      <picker-view-column>
        <view v-for="item in years" :key="item">{{item}}年</view>
      </picker-view-column>
      <picker-view-column>
        <view v-for="item in months" :key="item">{{item}}月</view>
      </picker-view-column>
      <picker-view-column>
        <view v-for="item in days" :key="item">{{item}}日</view>
      </picker-view-column>
    </picker-view>
  </view>
</template>

<script>
import range from '../utils/range';

const curYear = new Date().getFullYear();
export default {
  data() {
    return {
      years: range( curYear, 1949),
      months: range( 1, 12),
      days: range( 1, 30),
    };
  },
  props: {
    value: {
      type: Array,
      default: [0, 0, 0]
    }
  },
  components: {
  },
  onShow() {
  },
  mounted () {
  },
  methods: {
    onChange(e) {
      console.log('e', e);
    }
  }
};
</script>

<style lang="less">
  @import "./index.less";
</style>