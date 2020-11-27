<template>
  <el-dialog :visible.sync="dialogVisible" :before-close="handleClose">
    <div class="title_box align_items" slot="title">
      <div class="title">{{ title }}</div>
      <div class="subtitle">{{ subtitle }}</div>
    </div>
    <span>这是一段信息</span>
    <span slot="footer" class="dialog-footer">
      <el-button @click="dialogVisible = false">取 消</el-button>
      <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
    </span>
  </el-dialog>
</template>

<script>
export default {
  name: "dialog",
  props: {
    model: {
      type: String,
      default: "normal",
    },
    title: {
      type: String,
      default: "提示",
    },
    subtitle: {
      type: String,
      default: "",
    },
  },
  data() {
    return {
      categoryIndex: "0",
      itemIndex: "0",
    };
  },
  created() {
    let [categoryIndex, itemIndex] = this.value;
    this.categoryIndex = String(categoryIndex);
    this.itemIndex = String(itemIndex);
  },
  computed: {
    tabVal() {
      let { categoryIndex, itemIndex } = this;
      return [categoryIndex, itemIndex];
    },
  },
  watch: {
    tabVal(val, oldVal) {
      this.$emit("input", val);
      this.$emit("change", val);
    },
  },
};
</script>

<style  scoped>
.tips {
  padding: 16px;
  font-size: 18px;
  text-align: center;
}
</style>
