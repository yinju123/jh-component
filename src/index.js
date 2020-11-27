
import startEndDate from '../packages/start-end-date/index'
import tab from '../packages/tab/index'
import comment from '../packages/comment/index'

const components = [
  startEndDate,
  tab,
  comment
]

const install = function (Vue, opts = {}) {
  components.forEach(component => {
    Vue.component(component.name, component)
  })
}

export default {
  install,
  startEndDate,
  tab,
  comment
}

import '../styles/global.scss'