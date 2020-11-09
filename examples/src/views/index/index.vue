<template>
  <div class="index demo-block">
    <!-- 色彩规范 -->
    <!-- 色彩规范 -->

    <div class="part part1">
      <div class="part_title">00 组件介绍</div>
      <div class="part_content">
        <div class="desc font-size-16">项目介绍</div>
        <div class="part_item_title">使用组件库</div>
        <div class="desc font-size-16">
          <pre>
            npm i healthy-ui -S
            import 'healthy-ui/lib/styles/global.scss'
            import health from 'healthy-ui'
            vue.use(health)</pre>
        </div>
        <div class="part_item_title">目录结构</div>
        <div class="desc font-size-16">
          <pre>
            -- build  (webpack 配置文件)
            -- example  (组件案例项目)
            -- lib  (打包后生成的文件目录)
            -- node_modules  (npm包)
            -- packages  (组件目录)
            -- src  (入口文件目录)
            -- styles  (样式文件)
            -- utils  (工具函数目录)</pre>
        </div>
      </div>
    </div>
    <!-- 色彩规范 -->
    <div class="part part1">
      <div class="part_title">01 色彩规范</div>
      <div class="part_content">
        <div class="desc font-size-16">
          主背景色、边框颜色在font.scss中定义。在element-ui.scss使用，布局也在element-ui.scss中定义。内容区域外边距内边距为16px。最小高度为min-height:
          calc(100vh - 50px - 32px);有面包屑导航栏为min-height: calc(100vh -
          84px - 32px);
        </div>
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
    <!-- 字体规范 -->
    <div class="part part2">
      <div class="part_title">02 字体规范</div>
      <div class="part_content">
        <div class="desc font-size-16">
          常用三种字体大小：font-size-12、font-size-14、font-size-16。数字用字体DINEngschriftStd。另外定义了常用内间距外、外间距padding-16、margin-16
        </div>
        <el-table :data="fontSizes" :cell-class-name="cellClassName">
          <el-table-column prop="fontSize" label="大小" />
          <el-table-column prop="scene" label="场景" />
          <el-table-column prop="class" label="class" />
          <el-table-column prop="fontFamily" label="字体" />
        </el-table>
        <div class="code_container"><fontMd /></div>
      </div>
    </div>
    <!-- 按钮 -->
    <div class="part part3">
      <div class="part_title">03 按钮</div>
      <div class="part_content">
        <div class="desc font-size-16">
          element-ui按钮样式重置，重置样式在element-ui.scss中
        </div>
        <div class="example_container">
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
        <div class="code_container">
          <btnMd />
        </div>
      </div>
    </div>
    <!-- 表单 -->
    <div class="part part4">
      <div class="part_title">04 表单</div>
      <div class="part_content">
        <div class="desc font-size-16">
          表单内边距除下边距之外都是16，下边距24。输入框默认宽度200，高度32，左右内间距8，块级输入框下边距24，行内输入框下边距24，内右边距16。定义文件为element-ui.scss
        </div>
        <jh-form />
        <div class="code_container">
          <formMd />
        </div>
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
import btnMd from './btn.md'
import fontMd from './font.md'
import formMd from './form.md'
export default {
  name: 'UIIndex',
  components: {
    jhForm,
    btnMd,
    fontMd,
    formMd
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
    input(val) {
      console.log('val', val)
    },
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
