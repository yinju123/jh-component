<template>
  <div class="comment health">
    <div class="part">
      <div class="part_title">01 评价列表</div>
      <div class="part_content">
        <div class="desc font-size-16">嵌套tab，由两个el-tabs组成</div>
        <div class="explain">
          <div class="part_item_title">Tabs Attributes</div>
          <el-table :data="attrTableData">
            <el-table-column
              v-for="(item, index) in attrTableColumn"
              :key="index"
              :label="item.label"
              :prop="item.prop"
            />
          </el-table>
          <div class="part_item_title">Tabs Events</div>
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
          <div class="part_item_title">example</div>
          <comment :data="commentData" :author-id="authorId" />
        </div>
        <div class="code_container">
          <tabMd />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import tabMd from './tab.md'
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
          parameter: 'data',
          desc: '评价列表',
          type: 'Array',
          optionalValue: '-',
          default: []
        },
        {
          parameter: 'authorId',
          desc: '作者Id',
          type: 'String | Number',
          optionalValue: '-',
          default: ''
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
        // {
        //   eventName: "change",
        //   desc: "日期发生变化",
        //   callBack: "日期变化后的form数据",
        // },
      ],
      commentData: [
        {
          comment: '哈哈哈哈哈哈哈哈',
          commentDTOList: [
            {
              patientName: 'yhx',
              patId: '123',
              toPatientName: 'xyk',
              createTime: '2020-11-23 10:50:32',
              comment: '啦啦啦啦',
              commentTo: '9a6f66acec23476cbe25cb095fd47648',
              headUrl:
                'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1605696512961&di=fb36cfe226721f6e201d0ad0af27df94&imgtype=0&src=http%3A%2F%2Fww1.sinaimg.cn%2Fmw690%2F5301ff11ly1gb58jwjhikj20p00p0q4l.jpg',
              id: '557a467d1b9b4ba5be647ad4b5ed65cc'
            }
          ],
          commentTo: '',
          createTime: '2020-11-23 10:43:17',
          headUrl:
            'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1606106870992&di=fd1b7faf88c5c00bf34e6d1897b248e5&imgtype=0&src=http%3A%2F%2F5b0988e595225.cdn.sohucs.com%2Fq_70%2Cc_zoom%2Cw_640%2Fimages%2F20190227%2F0c2703da83d94592bf90e8fb0da54b1c.jpeg',
          id: '9a6f66acec23476cbe25cb095fd47648',
          isDelete: false,
          patId: '644f4f79d01b4b499c2d1850dbfdda49',
          patientName: 'xyk',
          toPatientName: 'yhx'
        }
      ],
      authorId: '123'
    }
  },
  created() {},
  methods: {
    change(val) {
      console.log(34, val)
    }
  }
}
</script>

<style scoped>
</style>
