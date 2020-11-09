<template>
  <div class="jh-form">
    <el-form>
      <el-form-item label="正常表单">
        <el-input />
      </el-form-item>
      <el-form-item label="禁用表单">
        <el-input disabled />
      </el-form-item>
    </el-form>

    <el-form inline>
      <el-form-item label="正常表单">
        <el-input />
      </el-form-item>
      <el-form-item label="禁用表单">
        <el-input disabled />
      </el-form-item>
      <el-button type="primary">主要按钮</el-button>
      <el-button type="primary" plain>次要按钮</el-button>
    </el-form>
  </div>
</template>

<script>
export default {
  components: {},
  props: {},
  data() {
    return {}
  },
  computed: {},
  watch: {},
  created() {
    this
  },
  mounted() {},
  methods: {}
}
</script>
<style lang="scss" scoped>
.wrapper {
}
</style>
