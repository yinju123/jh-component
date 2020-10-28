<template>
  <div class="avator">
    <img :src="src" />
  </div>
</template>

<script>
// import getName from "../../../utils/utils";
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
  created() {
    // getName.getName();
  },
  mounted() {},
};
</script>
<style lang="scss" scoped>
.avator {
  width: 30px;
  height: 30px;
  overflow: hidden;
  border-radius: 50%;
  border: 2px solid red;
}
</style>