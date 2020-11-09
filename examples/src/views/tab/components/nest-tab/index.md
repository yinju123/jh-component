```
<template>
  <tab @change="change" v-model="tabVal" :tabList="tabList" />
</template>
<script>
export default {
  data() {
    return {
      tabVal: [0, 0],
      tabList: [
        {
          label: "家具",
          list: ["桌子", "凳子", "椅子", "沙发"],
        },
        {
          label: "颜色",
          list: ["红", "黄", "蓝", "绿"],
        },
      ],
    };
  },
  methods: {
    change(val) {
      console.log(34, val);
    },
  },
};
</script>
```
