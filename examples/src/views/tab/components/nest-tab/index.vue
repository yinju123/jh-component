<template>
  <div class="tab">
    <div class="part">
      <div class="part_title">01 嵌套tab</div>
      <div class="part_content">
        <div class="desc font-size-16">嵌套tab，由两个el-tabs组成</div>
        <div class="explain">
          <div class="part_item_title">Tabs Attributes</div>
          <el-table :data="attrTableData">
            <el-table-column
              v-for="(item, index) in tableColumn"
              :key="index"
              :label="item.label"
              :prop="item.prop"
            />
          </el-table>
          <div class="part_item_title">Tabs Events</div>
          <el-table :data="eventTableData">
            <el-table-column
              v-for="(item, index) in tableColumn"
              :key="index"
              :label="item.label"
              :prop="item.prop"
            />
          </el-table>
        </div>
        <div class="example_container">
          <div class="part_item_title">example</div>
          <tab v-model="tabVal" :tab-list="tabList" @change="change" />
        </div>
        <div class="code_container">
          <tabMd />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import tabMd from './index.md'
export default {
  components: {
    tabMd
  },
  data() {
    return {
      tabVal: [0, 0],
      tabList: [
        {
          label: '家具',
          list: ['桌子', '凳子', '椅子', '沙发']
        },
        {
          label: '颜色',
          list: ['红', '黄', '蓝', '绿']
        }
      ],
      tableColumn: [
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
          parameter: 'tabList',
          desc: 'tab列表展示的数据',
          type: 'Array',
          optionalValue: '-',
          default: '[]'
        },
        {
          parameter: 'value/v-model',
          desc: '绑定值,激活项对应的下标',
          type: 'Array',
          optionalValue: '-',
          default: '[0,0]'
        }
      ],
      eventTableData: [
        {
          parameter: 'change',
          desc: 'tab选项值发生变化时触发，参数val，表示变化后的结果',
          type: 'Array',
          optionalValue: '-',
          default: '[]'
        }
      ]
    }
  },
  created() {},
  methods: {
    change(val) {
      console.log('tab发生变化', val)
    }
  }
}
</script>

<style scoped>
</style>
