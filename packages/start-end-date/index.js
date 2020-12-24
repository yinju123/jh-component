import startEndDate from './src/main.vue';
/* istanbul ignore next */
startEndDate.install = function(Vue) {
  Vue.component(startEndDate.name, startEndDate);
};

export default startEndDate;
