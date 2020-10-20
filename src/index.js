import Avatar from '../packages/avatar/index'
import Avatar2 from '../packages/avatar2/index'

const components = [
  Avatar,
  Avatar2
]

const install = function (Vue, opts = {}) {
  components.forEach(component => {
    Vue.component(component.name, component)
  })
}


export default {
  install,
  Avatar
}