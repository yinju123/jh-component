import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

/* Layout */
import Layout from '@/layout'

/* Router Modules */
// import componentsRouter from './modules/components'
// import chartsRouter from './modules/charts'
// import tableRouter from './modules/table'
// import nestedRouter from './modules/nested'

/**
 * Note: sub-menu only appear when route children.length >= 1
 * Detail see: https://panjiachen.github.io/vue-element-admin-site/guide/essentials/router-and-nav.html
 *
 * hidden: true                   if set true, item will not show in the sidebar(default is false)
 * alwaysShow: true               if set true, will always show the root menu
 *                                if not set alwaysShow, when item has more than one children route,
 *                                it will becomes nested mode, otherwise not show the root menu
 * redirect: noRedirect           if set noRedirect will no redirect in the breadcrumb
 * name:'router-name'             the name is used by <keep-alive> (must set!!!)
 * meta : {
    roles: ['admin','editor']    control the page roles (you can set multiple roles)
    title: 'title'               the name show in sidebar and breadcrumb (recommend set)
    icon: 'svg-name'/'el-icon-x' the icon show in the sidebar
    noCache: true                if set true, the page will no be cached(default is false)
    affix: true                  if set true, the tag will affix in the tags-view
    breadcrumb: false            if set false, the item will hidden in breadcrumb(default is true)
    activeMenu: '/example/list'  if set path, the sidebar will highlight the path you set
  }
 */

/**
 * constantRoutes
 * a base page that does not have permission requirements
 * all roles can be accessed
 */
export const constantRoutes = [
  {
    path: '/redirect',
    component: Layout,
    hidden: true,
    children: [
      {
        path: '/redirect/:path(.*)',
        component: () => import('@/views/redirect/index')
      }
    ]
  },
  {
    path: '/',
    redirect: 'normal'
  },
  {
    path: '/login',
    component: () => import('@/views/login/index'),
    hidden: true
  },
  {
    path: '/auth-redirect',
    component: () => import('@/views/login/auth-redirect'),
    hidden: true
  },
  {
    path: '/404',
    component: () => import('@/views/error-page/404'),
    hidden: true
  },
  {
    path: '/401',
    component: () => import('@/views/error-page/401'),
    hidden: true
  }
]

/**
 * asyncRoutes
 * the routes that need to be dynamically loaded based on user roles
 */
/*
hidden 便是不展示在侧边栏
alwaysShow 就算只有一个子集也展示父级标签
一定要设置meta，不然也不展示在侧边栏
*/

export const asyncRoutes = [
  {
    path: '/normal',
    component: Layout,
    redirect: '/normal/index',
    meta: {
      title: '',
      icon: 'el-icon-s-help'
    },
    children: [
      {
        path: 'index',
        name: 'index',
        component: () => import('@/views/index/index'),
        meta: {
          title: 'index',
          icon: 'el-icon-s-help'
        }
      }
    ]
  },
  {
    path: '/form',
    component: Layout,
    meta: {
      title: 'form',
      icon: 'el-icon-s-help'
    },
    children: [
      {
        path: 'form-index',
        name: 'form-index',
        component: () => import('@/views/form/index'),
        meta: {
          title: 'form',
          icon: 'el-icon-s-help'
        }
      }
    ]
  },
  {
    path: '/tab',
    component: Layout,
    meta: {
      title: 'tab',
      icon: 'el-icon-s-help'
    },
    children: [
      {
        path: 'tab-index',
        name: 'tab-index',
        component: () => import('@/views/tab/index'),
        meta: {
          title: 'tab',
          icon: 'el-icon-s-help'
        }
      }
    ]
  },
  {
    path: '/dialog',
    component: Layout,
    meta: {
      title: 'dialog',
      icon: 'el-icon-s-help'
    },
    children: [
      {
        path: 'dialog-index',
        name: 'dialog-index',
        component: () => import('@/views/dialog/index'),
        meta: {
          title: 'dialog',
          icon: 'el-icon-s-help'
        }
      }
    ]
  },
  {
    path: '/comment',
    component: Layout,
    meta: {
      title: 'comment',
      icon: 'el-icon-s-help'
    },
    children: [
      {
        path: 'comment-index',
        name: 'comment-index',
        component: () => import('@/views/comment/index'),
        meta: {
          title: 'comment',
          icon: 'el-icon-s-help'
        }
      }
    ]
  }
]

const createRouter = () => new Router({
  // mode: 'history', // require service support
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRoutes
})

const router = createRouter()

// Detail see: https://github.com/vuejs/vue-router/issues/1234#issuecomment-357941465
export function resetRouter() {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher // reset router
}

export default router
