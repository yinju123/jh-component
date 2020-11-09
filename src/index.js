
import startEndDate from '../packages/start-end-date/index'
import tab from '../packages/tab/index'

const components = [
  startEndDate,
  tab
]

const install = function (Vue, opts = {}) {
  components.forEach(component => {
    Vue.component(component.name, component)
  })
}

export default {
  install,
  startEndDate,
  tab
}

import '../styles/global.scss'