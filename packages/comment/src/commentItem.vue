<template>
  <div class="commentItem items_start" :class="data.first ? 'first' : ''">
    <div class="avatar">
      <img :src="data.headUrl" />
    </div>
    <div class="card_content">
      <div class="username_date align_items">
        <div class="username">{{ data.patientName }}</div>
        <div class="author" v-if="authorId === data.patId">作者</div>
        <template v-if="data.toPatientName">
          <div class="tips">回复了</div>
          <div class="username">{{ data.toPatientName }}</div>
          <div class="author" v-if="authorId === data.commentTo">作者</div>
        </template>
        <div class="date">{{ data.createTime }}</div>
      </div>
      <div class="comment_text">{{ data.comment }}</div>
      <commentItem
        v-for="(item, index) in data.commentDTOList"
        :data="item"
        :key="index"
        :authorId="authorId"
      ></commentItem>
    </div>
  </div>
</template>

<script>
export default {
  name: "commentItem",
  props: {
    data: {
      type: Object,
      default() {
        return {};
      },
    },
    authorId: {},
  },
  data() {
    return {};
  },
  watch: {},
  computed: {},
  methods: {},
  created() {},
  mounted() {},
};
</script>
<style lang="scss" scoped>
.commentItem {
  padding-top: 10px;
}

.first {
  border-bottom: 1px solid #ddd;
  &:last-child {
    border: none;
  }
}
.avatar {
  width: 30px;
  height: 30px;
  border-radius: 50%;
  overflow: hidden;
  margin-right: 10px;
}
.username_date {
  line-height: 18px;
}
.username {
  color: #1555b1;
}
.tips {
  margin: 0 4px;
  color: #999;
}
.date {
  margin-left: 18px;
  color: #999;
}
.comment_text {
  margin-top: 5px;
  margin-bottom: 10px;
}
.reply {
  margin-top: 10px;
}
.author {
  width: 35px;
  height: 18px;
  margin: 0 10px;
  background-color: #287cf6;
  border-radius: 2px;
  text-align: center;
  line-height: 18px;
  color: #fff;
}
</style>