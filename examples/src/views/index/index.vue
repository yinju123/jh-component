<template>
  <div class="index demo-block">
    <!-- 色彩规范 -->
    <div class="part part1">
      <div class="part_title">01 色彩规范</div>
      <div class="part_content">
        <div class="list align_items_wrap">
          <div
            v-for="(item, index) in colorList"
            :key="index"
            class="list_item"
          >
            <div class="color_box">
              <div
                class="color_example"
                :style="{ backgroundColor: item.val }"
              />
              <div class="color_text">{{ item.val }}</div>
            </div>
            <div class="tips">{{ item.tips }}</div>
          </div>
        </div>
      </div>
    </div>
    <div class="part part2">
      <div class="part_title DINEngschriftStd">02 字体规范</div>
      <div class="part_content">
        <el-table :data="fontSizes" :cell-class-name="cellClassName">
          <el-table-column
            prop="fontSize"
            class="DINEngschriftStd"
            label="大小"
          />
          <el-table-column prop="scene" label="场景" />
          <el-table-column prop="class" label="class" />
          <el-table-column prop="fontFamily" label="字体" />
        </el-table>
      </div>
    </div>
    <div class="part part3">
      <div class="part_title">03 按钮</div>
      <div class="part_content">
        <el-row class="margin-bottom-16">
          <el-button type="primary">主要按钮</el-button>
          <el-button
            type="primary"
            icon="el-icon-search"
          >主要按钮带图标</el-button>
          <el-button type="primary" disabled>主要按钮禁用</el-button>
        </el-row>
        <el-row class="margin-bottom-16">
          <el-button type="primary" plain>次要按钮</el-button>
          <el-button
            type="primary"
            icon="el-icon-search"
            plain
          >次要按钮带图标</el-button>
          <el-button type="primary" plain disabled>次要按钮禁用</el-button>
        </el-row>
        <el-row class="margin-bottom-16">
          <el-button type="danger">危险按钮</el-button>
        </el-row>
      </div>
    </div>
    <!-- 表单 -->
    <div class="part part2">
      <div class="part_title">04 表单</div>
      <div class="part_content">
        <jh-form />
      </div>
    </div>

    <!-- 字体规范 -->
    <!-- <div class="part part2">
      <div class="part_title">02 色彩规范</div>
      <div class="part_content">
        <el-table :data="fontSizes">
          <el-table-column prop="fontSize" label="大小"></el-table-column>
          <el-table-column prop="scene" label="场景"></el-table-column>
          <el-table-column prop="class" label="class"></el-table-column>
        </el-table>
      </div>
    </div> -->
  </div>
</template>

<script>
import jhForm from './component/jh-form'
export default {
  name: 'UIIndex',
  components: {
    jhForm
  },
  props: {},
  data() {
    return {
      colorList: [
        {
          val: '#287CF6',
          tips: 'logo、按钮、图标、标签高亮'
        },

        {
          val: '#092B5E',
          tips: '导航背景'
        },
        {
          val: '#287CF6',
          tips: 'logo、按钮、图标、标签高亮'
        },
        {
          val: '#EAECEF',
          tips: '大背景'
        },
        {
          val: '#DDDDDD',
          tips: '表单等边框'
        },
        {
          val: '#EEEEEE',
          tips: '分割线'
        },

        {
          val: '#333333',
          tips: '标题、正文'
        },
        {
          val: '#666',
          tips: '表单标题、标签文字'
        },
        {
          val: '#999',
          tips: '辅助文字、提示性文字'
        }
      ],
      fontSizes: [
        {
          fontSize: 12,
          scene: '正文、一般标题、标签、辅助文字',
          class: 'font-size-12',
          fontFamily: 'DINEngschriftStd'
        },
        {
          fontSize: 14,
          scene: '标题、导航、按钮等',
          class: 'font-size-14',
          fontFamily: '正常字体'
        },
        {
          fontSize: 16,
          scene: '加粗，强调字体',
          class: 'font-size-16',
          fontFamily: '正常字体'
        }
      ]
    }
  },
  created() {},
  mounted() {},
  methods: {
    cellClassName({ row, column, rowIndex, columnIndex }) {
      if (rowIndex === 0) {
        return 'DINEngschriftStd'
      }
    }
  }
}
</script>
<style lang="scss">
.DINEngschriftStd {
  font-family: "DINEngschriftStd";
}
</style>
<style lang="scss" scoped>
.index {
  .part:nth-child(n + 2) {
    margin-top: 16px;
  }
  .part_title {
    font-size: 40px;
    color: #008dff;
    font-weight: bold;
  }
  .part_content {
    padding: 20px;
  }
  .part1 {
    .list_item {
      margin-right: 16px;
      margin-bottom: 16px;
      & + .list_item {
        margin-right: 20px;
      }
    }
    .color_box {
      width: 80px;
      box-shadow: 0px 2px 8px 0px rgba(44, 89, 132, 0.24);
    }
    .color_example {
      height: 60px;
    }
    .color_text {
      height: 30px;
      background-color: #fff;
      text-align: center;
      line-height: 30px;
    }
    .tips {
      margin-top: 12px;
    }
  }
}
</style>
