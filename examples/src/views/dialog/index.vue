<template>
  <div class="tab">
    <div class="part">
      <div class="part_title">01 普通弹窗</div>
      <div class="part_content">
        <div class="desc font-size-16">
          这里基本用的是element的功能，只是修改了样式
        </div>
        <div class="desc font-size-16">
          内容居中，最小宽度高度40%,最大宽度高度80%，点击遮罩层不关闭弹窗
        </div>
        <div class="example_container">
          <el-button
            type="primary"
            @click="dialogVisible = true"
          >普通弹窗</el-button>
          <el-button type="primary" @click="open">confirm</el-button>
          <el-dialog
            title="提示"
            :visible.sync="dialogVisible"
            :close-on-click-modal="false"
          >
            <div slot="title" class="title_box align_items">
              <div class="title">title</div>
              <div class="subtitle">subtitle</div>
            </div>
            <div class="dialog_content">123</div>
            <span slot="footer" class="dialog-footer">
              <el-button @click="dialogVisible = false">取 消</el-button>
              <el-button
                type="primary"
                @click="dialogVisible = false"
              >确 定</el-button>
            </span>
          </el-dialog>
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
      dialogVisible: false
    }
  },
  created() {},
  methods: {
    open() {
      this.$confirm('此操作将永久删除该文件, 是否继续?', '', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      })
        .then(() => {
          this.$message({
            type: 'success',
            message: '删除成功!'
          })
        })
        .catch(() => {
          this.$message({
            type: 'info',
            message: '已取消删除'
          })
        })
    }
  }
}
</script>

<style scoped lang="scss">
.dialog_content {
  // height: 800px;
}
</style>
