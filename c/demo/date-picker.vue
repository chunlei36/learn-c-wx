<template>
  <picker-view class="picker-container" :value="valueIndex" @change="onChange">
    <picker-view-column>
      <view class="item" v-for="item in years" :key="item">{{item}}年</view>
    </picker-view-column>
    <picker-view-column>
      <view class="item" v-for="item in months" :key="item">{{item}}月</view>
    </picker-view-column>
    <picker-view-column>
      <view class="item" v-for="item in days" :key="item">{{item}}日</view>
    </picker-view-column>
  </picker-view>
</template>

<script>
import range from '../utils/range';

export default {
  data() {
    return {
      years: range(1949, 2020),
      months: range(1, 12),
      days: range(1, 31),
    };
  },
  props: {
    valueIndex: {
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
  onHide() {
  },
  onShareAppMessage() {
  },
  methods: {
    onChange({ detail: { value } }) {
      const result = `${this.years[value[0]]}年${this.months[value[1]]}月${this.days[value[2]]}日`;
      this.$emit('change', result);
    }
  }
};
</script>

<style lang="less">
  @import "./index.less";
</style>