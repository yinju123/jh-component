```
<template>
  <comment :data="commentData" :authorId="authorId"></comment>
</template>
<script>
export default {
  data() {
    return {
      <!-- 聊天数据 -->
      commentData: [
        {

          comment: "哈哈哈哈哈哈哈哈", // 评论内容
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
          ],
          commentTo: "", // 被回复人的id
          createTime: "2020-11-23 10:43:17", // 创建时间
          headUrl: // 回复人头像
            "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1606106870992&di=fd1b7faf88c5c00bf34e6d1897b248e5&imgtype=0&src=http%3A%2F%2F5b0988e595225.cdn.sohucs.com%2Fq_70%2Cc_zoom%2Cw_640%2Fimages%2F20190227%2F0c2703da83d94592bf90e8fb0da54b1c.jpeg",
          id: "9a6f66acec23476cbe25cb095fd47648", // 该条记录id
          isDelete: false, // 是否被删除
          patId: "644f4f79d01b4b499c2d1850dbfdda49", // 评论人id
          patientName: "xyk", // 评论人姓名
          toPatientName: "yhx", // 被评论人姓名
        },
      ],
      <!-- 作者id，与评论id做比较判断该条记录是否是作者评论 -->
      authorId: "123",
    };
  },
};
</script>
```
