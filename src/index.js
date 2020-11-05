import Avatar from '../packages/avatar/index'
import startEndDate from '../packages/start-end-date/index'

const components = [
  Avatar,
  startEndDate
]

const install = function (Vue, opts = {}) {
  components.forEach(component => {
    Vue.component(component.name, component)
  })
}

export default {
  install,
  Avatar,
  startEndDate
}

import '../styles/global.scss'
import '../styles/element-ui.scss'