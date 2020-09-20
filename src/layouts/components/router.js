// export default function (Vue, { router, head, isClient }) {
//   // Set default layout as a global component
//   Vue.use(router)
//   Vue.use(ElementUI)
// }

export const constantRouterMap = [
  {
    path: '/',
    meta: {
      type: "user",
      icon: 'el-icon-star-off',
      title: '最新动态'
    }
  },
  {
    path: '/social/main',
    meta: {
      type: "user",
      icon: 'el-icon-mobile-phone',
      title: '社交圈'
    }
  },
  {
    path: '/blog/main',
    meta: {
      type: "user",
      icon: 'el-icon-edit-outline',
      title: '博客列表'
    }
  },
  {
    path: '/project/main',
    meta: {
      type: "user",
      icon: 'el-icon-service',
      title: '开源项目'
    }
  },
  {
    path: '/helper/main',
    meta: {
      type: "user",
      icon: 'el-icon-printer',
      title: '使用帮助',
      mini: true
    }
  },
  {
    path: '/configure/main',
    meta: {
      type: "user",
      icon: 'el-icon-setting',
      title: '系统配置',
      LoginRequired: true
    }
  }
]

export default constantRouterMap