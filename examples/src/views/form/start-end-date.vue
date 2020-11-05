<template>
  <div class="start-end-date">
    <el-form inline>
      <start-end-date :form="form" :keys="keys" @date-change="dateChange" />
    </el-form>
    <div class="show_val">
      startTime:{{ form.startTime }} endTime:{{ form.endTime }}
    </div>
  </div>
</template>

<script>
import { lastWeekDay, dateToString } from '../../../../utils/utils'
export default {
  // name: "start-end-date",
  components: {},
  props: {},
  data() {
    return {
      form: {
        startTime: '',
        endTime: ''
      },
      keys: ['startTime', 'endTime']
    }
  },
  created() {
    this.form = {
      startTime: lastWeekDay(),
      endTime: dateToString()
    }
  },
  mounted() {},
  methods: {
    /*
      作用有两个：1) 监听到日期变化 2) 获取到最新值(其实也不用获取最新值，因为form是对象，组件中修改了form属性的值，此处的form属性的值也会反生改变)
    */
    dateChange(val) {
      console.log('日期变化', val)
    }
  }
}
</script>
<style lang="scss" scoped>
.show_val {
  background-color: #fff;
  padding: 30px;
}
</style>
