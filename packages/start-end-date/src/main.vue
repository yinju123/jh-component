<template>
  <div class="startEndDate">
    <el-form-item label="开始时间" :prop="keys[0]">
      <el-date-picker
        v-model="form[keys[0]]"
        type="date"
        placeholder="请选择开始时间"
        value-format="yyyy-MM-dd"
        :picker-options="startOptions"
      ></el-date-picker>
    </el-form-item>
    <el-form-item label="结束时间" :prop="keys[1]">
      <el-date-picker
        v-model="form[keys[1]]"
        type="date"
        placeholder="请选择结束时间"
        :picker-options="endOptions"
        value-format="yyyy-MM-dd"
      ></el-date-picker>
    </el-form-item>
  </div>
</template>

<script>
import { clone } from "../../../utils/utils";
// "webpack": "^3.6.0",
export default {
  name: "start-end-date",
  props: {
    // 表单对象
    form: {
      type: Object,
      default() {
        return {
          beginTime: "",
          endTime: "",
        };
      },
    },
    // 开始时间、结束时间对应的key
    keys: {
      type: Array,
      default() {
        return ["beginTime", "endTime"];
      },
    },
  },
  data() {
    return {
      startOptions: {
        disabledDate: (val) => {
          let endTime = this.form[this.keys[1]];
          if (endTime) {
            return new Date(endTime) - new Date(val) < 0;
          } else {
            return false;
          }
        },
      },
      endOptions: {
        disabledDate: (val) => {
          let beginTime = this.form[this.keys[0]];
          if (beginTime) {
            return new Date(beginTime) - new Date(val) > 0;
          } else {
            return false;
          }
        },
      },
    };
  },
  computed: {
    dateVal() {
      let { form, keys } = this;
      let [key1, key2] = keys;
      return {
        [key1]: form[key1],
        [key2]: form[key2],
      };
    },
  },
  created() {},
  watch: {
    dateVal(val) {
      let { form } = this;
      this.$emit("change", form);
    },
  },
};
</script>
<style lang="scss">
.startEndDate {
}
</style>