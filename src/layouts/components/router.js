// export default function (Vue, { router, head, isClient }) {
//   // Set default layout as a global component
//   Vue.use(router)
//   Vue.use(ElementUI)
// }
import Layout from '../Layout'

export const constantRouterMap = [
  {
    path: '/user/new',
    redirect: '/user/new/main',
    component: Layout,
    meta: {
      type: "user",
      icon: 'el-icon-star-off',
      title: '最新动态'
    }
  },
  {
    path: '/user/social',
    redirect: '/user/social/main',
    component: Layout,
    meta: {
      type: "user",
      icon: 'el-icon-mobile-phone',
      title: '社交圈'
    }
  },
  {
    path: '/user/blog',
    redirect: '/user/blog/main',
    component: Layout,
    meta: {
      type: "user",
      icon: 'el-icon-edit-outline',
      title: '博客列表'
    }
  },
  {
    path: '/user/project',
    redirect: '/user/project/main',
    component: Layout,
    meta: {
      type: "user",
      icon: 'el-icon-service',
      title: '开源项目'
    }
  },
  {
    path: '/user/helper',
    redirect: '/user/helper/main',
    component: Layout,
    meta: {
      type: "user",
      icon: 'el-icon-printer',
      title: '使用帮助',
      mini: true
    }
  },
  {
    path: '/user/readme',
    redirect: '/user/readme/main',
    component: Layout,
    meta: {
      type: "user",
      icon: 'el-icon-document',
      title: 'README.md'
    }
  },
  {
    path: '/user/configure',
    redirect: '/user/configure/main',
    component: Layout,
    meta: {
      type: "user",
      icon: 'el-icon-setting',
      title: '系统配置',
      LoginRequired: true
    }
  }
]

export default constantRouterMap