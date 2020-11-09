<template>
  <!-- 表单 -->
  <div class="part part4">
    <div class="part_title">01 start-end-date组件</div>
    <div class="part_content">
      <div class="desc font-size-16">
        使用element-ui修改；特点：开始时间和结束时间可以只选其中一个，但是之间有时间限制，开始时间不能选结束时间之后的时间。element自带的日期选择器必须同时选择开始时间，结束时间
      </div>
      <div class="explain_container">
        <div class="part_item_title">start-end-date Attributes</div>
        <el-table :data="attrTableData">
          <el-table-column
            v-for="(item, index) in attrTableColumn"
            :key="index"
            :label="item.label"
            :prop="item.prop"
          />
        </el-table>
        <div class="part_item_title">start-end-date Events</div>
        <el-table :data="eventTableData">
          <el-table-column
            v-for="(item, index) in eventTableColumn"
            :key="index"
            :label="item.label"
            :prop="item.prop"
          />
        </el-table>
      </div>
      <div class="example_container">
        <div class="part_item_title">Example</div>
        <el-form inline>
          <start-end-date :form="form" :keys="keys" @change="dateChange" />
        </el-form>
        <div class="show_val font-size-16">
          startTime:{{ form.startTime }} <br>
          endTime:{{ form.endTime }}
        </div>
      </div>
      <div class="code_container">
        <!-- <formMd /> -->
        <markdown />
      </div>
    </div>
  </div>
</template>

<script>
// 此为utils中定义的方法
import { lastWeekDay, dateToString } from '../../../../../utils/utils'
import markdown from './markdown.md'
export default {
  components: { markdown },
  data() {
    return {
      // 表单数据
      form: {
        startTime: '',
        endTime: ''
      },
      // 开时时间、结束时间对应的字段，默认为["beginTime", "endTime"]
      keys: ['startTime', 'endTime'],
      attrTableColumn: [
        {
          prop: 'parameter',
          label: '参数'
        },
        {
          prop: 'desc',
          label: '说明'
        },
        {
          prop: 'type',
          label: '类型'
        },
        {
          prop: 'optionalValue',
          label: '可选值'
        },
        {
          prop: 'default',
          label: '默认值'
        }
      ],
      attrTableData: [
        {
          parameter: 'form',
          desc: '表单数据',
          type: 'Object',
          optionalValue: '-',
          default: `
            form: {
              startTime: "",
              endTime: "",
            }
          `
        },
        {
          parameter: 'keys',
          desc: '开始时间、结束时间对应的form的keys值',
          type: 'Array',
          optionalValue: '-',
          default: "['startTime', 'endTime']"
        }
      ],
      eventTableColumn: [
        {
          prop: 'eventName',
          label: '事件名称'
        },
        {
          prop: 'desc',
          label: '说明'
        },
        {
          prop: 'callBack',
          label: '回调参数'
        }
      ],
      eventTableData: [
        {
          eventName: 'change',
          desc: '日期发生变化',
          callBack: '日期变化后的form数据'
        }
      ]
    }
  },
  created() {
    this.form = {
      startTime: lastWeekDay(),
      endTime: dateToString()
    }
  },
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
  padding: 16px 0;
}
</style>
