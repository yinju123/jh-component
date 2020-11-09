```
<template>
  <start-end-date :form="form" :keys="keys" @change="dateChange" />
</template>
<script>
// 此为utils中定义的方法
import { lastWeekDay, dateToString } from "../../../../../utils/utils";
export default {
  data() {
    return {
      // 表单数据
      form: {
        startTime: "",
        endTime: "",
      },
      // 开时时间、结束时间对应的字段，默认为["beginTime", "endTime"]
      keys: ["startTime", "endTime"],
    };
  },
  created() {
    this.form = {
      startTime: lastWeekDay(),
      endTime: dateToString(),
    };
  },
  methods: {
    /*
      作用有两个：1) 监听到日期变化 2) 获取到最新值(其实也不用获取最新值，因为form是对象，组件中修改了form属性的值，此处的form属性的值也会反生改变)
    */
    dateChange(val) {
      console.log("日期变化", val);
    },
  },
};
</script>
```
