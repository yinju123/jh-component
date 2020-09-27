<template>
  <div class="avator">
    12
    <img :src="src" />
  </div>
</template>

<script>
export default {
  name: "avator",
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
}
</style>