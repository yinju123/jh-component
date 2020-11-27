<template>
  <div class="tab">
    <el-tabs v-if="tabList.length" v-model="categoryIndex">
      <el-tab-pane
        :label="category.label"
        :name="String(categoryIndex)"
        v-for="(category, categoryIndex) in tabList"
        :key="categoryIndex"
      >
        <el-tabs v-model="itemIndex" type="border-card">
          <el-tab-pane
            v-for="(item, index) in category.list"
            :key="index"
            :label="item"
            :name="String(index)"
            >用户管理</el-tab-pane
          >
        </el-tabs>
      </el-tab-pane>
    </el-tabs>
    <div v-else class="tips">tabList数据为空</div>
  </div>
</template>

<script>
export default {
  name: "Tab",
  props: {
    tabList: {
      type: Array,
      default() {
        return [
          // {
          //   label: "家具",
          //   list: ["桌子", "凳子", "椅子", "沙发"],
          // },
          // {
          //   label: "颜色",
          //   list: ["红", "黄", "蓝", "绿"],
          // },
        ];
      },
    },
    value: {
      type: Array,
      default() {
        return ["0", "0"];
      },
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
