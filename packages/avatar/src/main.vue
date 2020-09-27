<template>
  <div class="avator">
    <img :src="src" />
  </div>
</template>

<script>
export default {
  name: "Avatar",
  components: {},
  props: {
    src: String,
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
.avator {
  width: 30px;
  height: 30px;
  overflow: hidden;
  border-radius: 50%;
  border:2px solid red;
}
</style>