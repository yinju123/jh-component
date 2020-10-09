<template>
  <div class="avator"></div>
</template>

<script>
import { getName } from "../../../utils/utils";
import jquery from "jquery";
export default {
  name: "Avatar2",
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
    getName();
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