import tab from './src/main.vue';
/* istanbul ignore next */
tab.install = function(Vue) {
  Vue.component(tab.name, Avatar);
};

export default tab;
