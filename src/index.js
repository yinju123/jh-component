import Avatar from '../packages/avatar/index'


const components = [
  Avatar
]

const install = function(Vue, opts = {}){
  components.forEach(component => {
    Vue.component(component.name, component)
  })
}


export default {
  install,
  Avatar
}