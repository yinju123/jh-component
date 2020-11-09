<template>
  <div class="form demo-block">
    <!-- 色彩规范 -->
    <div class="part part1">
      <start-end-date />
    </div>
  </div>
</template>

<script>
import startEndDate from './start-end-date/index'
export default {
  components: {
    startEndDate
  },
  props: {},
  data() {
    return {}
  },
  computed: {},
  watch: {},
  created() {},
  mounted() {},
  methods: {}
}
</script>
<style lang="scss" scoped>
.wrapper {
}
</style>
