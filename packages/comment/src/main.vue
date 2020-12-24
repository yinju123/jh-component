<template>
  <div class="comment">
    <commentItem
      v-for="(item, index) in data"
      :key="index"
      :data="item"
      :authorId="authorId"
    ></commentItem>
  </div>
</template>

<script>
import commentItem from "./commentItem.vue";
export default {
  name: "comment",
  components: {
    commentItem,
  },
  props: {
    data: {
      type: Array,
      default() {
        return [
          {
            comment: "哈哈哈哈哈哈哈哈",
            commentDTOList: [
              {
                patientName: "yhx",
                patId: "123",
                toPatientName: "xyk",
                createTime: "2020-11-23 10:50:32",
                comment: "啦啦啦啦",
                commentTo: "9a6f66acec23476cbe25cb095fd47648",
                headUrl:
                  "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1605696512961&di=fb36cfe226721f6e201d0ad0af27df94&imgtype=0&src=http%3A%2F%2Fww1.sinaimg.cn%2Fmw690%2F5301ff11ly1gb58jwjhikj20p00p0q4l.jpg",
                id: "557a467d1b9b4ba5be647ad4b5ed65cc",
              },
              {
                comment: "哇哇哇哇",
                commentTo: "123",
                createTime: "2020-11-23 10:57:17",
                id: "80a965f96d4b41f1a10202e7135725a0",
                isDelete: false,
                patId: "f61b000feb624ef589af71a4edc6ad25",
                patientName: "xyk1",
                toPatientName: "yhx",
              },
              {
                comment: "哈哈哈",
                commentTo: "9a6f66acec23476cbe25cb095fd47648",
                createTime: "2020-11-23 13:41:38",
                headUrl:
                  "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1606106870992&di=fd1b7faf88c5c00bf34e6d1897b248e5&imgtype=0&src=http%3A%2F%2F5b0988e595225.cdn.sohucs.com%2Fq_70%2Cc_zoom%2Cw_640%2Fimages%2F20190227%2F0c2703da83d94592bf90e8fb0da54b1c.jpeg",
                id: "f2d811e6af49483b9b610ef276c22c7c",
                isDelete: false,
                patId: "644f4f79d01b4b499c2d1850dbfdda49",
                patientName: "xyk",
                toPatientName: "xyk",
              },
            ],
            commentTo: "",
            createTime: "2020-11-23 10:43:17",
            headUrl:
              "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1606106870992&di=fd1b7faf88c5c00bf34e6d1897b248e5&imgtype=0&src=http%3A%2F%2F5b0988e595225.cdn.sohucs.com%2Fq_70%2Cc_zoom%2Cw_640%2Fimages%2F20190227%2F0c2703da83d94592bf90e8fb0da54b1c.jpeg",
            id: "9a6f66acec23476cbe25cb095fd47648",
            isDelete: false,
            patId: "644f4f79d01b4b499c2d1850dbfdda49",
            patientName: "xyk",
            toPatientName: "yhx",
          },
        ];
      },
    },
    authorId: {
      default: "",
    },
  },
  data() {
    return {};
  },
  created() {
    // console.log(1232, this.authorId);
  },
  methods: {},
  mounted() {},
};
</script>
<style lang="scss" scoped>
.comment {
  & > .commentItem {
    border-top: 1px solid #ddd;
    &:first-child {
      border: none;
    }
  }
}
</style>