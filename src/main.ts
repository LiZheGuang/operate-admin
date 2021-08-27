import { App as VueInstance, createApp } from 'vue'
import App from './App.vue'

import {
  qiankunWindow,
  renderWithQiankun,
} from 'vite-plugin-qiankun/dist/helper'
import {
  createMemoryHistory,
  createRouter,
  Router,
  RouterHistory,
  createWebHashHistory
} from 'vue-router'
import { routeList } from './constants/index'
// import 'ant-design-vue/dist/antd.less'

let app: VueInstance | null = null
let history: RouterHistory | null = null
let router: Router | null = null

function render(props: any) {
  const { container } = props
  app = createApp(App)
  history = createMemoryHistory()
  router = createRouter({
    history: history,
    routes: routeList,
  })
  app.use(router)
  app.mount(
    container
      ? container.querySelector('#root')
      : document.getElementById('root'),
  )
}

renderWithQiankun({
  mount(props: any) {
    console.log('vue mount')
    render(props)
  },
  bootstrap() {
    console.log('bootstrap')
  },
  unmount(props: any) {
    console.log('vue unmount')
    app!.unmount()
      ; (app!._container as HTMLDivElement).innerHTML = ''
    app = null
    router = null
    history!.destroy()
    history = null
  },
})

if (!qiankunWindow.__POWERED_BY_QIANKUN__) {
  console.log('本地执行')
  render({})
}
