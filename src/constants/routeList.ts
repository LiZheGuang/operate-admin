import { RouteRecordRaw } from 'vue-router'

export const routeList: RouteRecordRaw[] = [
  {
    path: '/',
    component: import('../views/main/MainPage.vue'),
    children: [
      {
        path: '/',
        component: import('../views/main/view/hello/HelloPage.vue'),
        strict: true,
      },
      {
        path: '/world',
        component: import('../views/main/view/world/WorldPage.vue'),
      },
    ],
  },
]
