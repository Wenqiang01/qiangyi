import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import DevDocs from '@/components/DevDocs'
import Login from '@/components/login/Login'
import Dashboard from '@/components/dashboard/Dashboard'
import StoryOne from '@/components/stories/StoryOne'
import StoryTwo from '@/components/stories/StoryTwo'
import StoryThree from '@/components/stories/StoryThree'
import Pictures from '@/components/stories/pictures'
import Company from '@/components/stories/company'
import Contents from '@/components/stories/contents'
import CompanyRewards from '@/components/stories/company-rewards';
import CompanyNews from '@/components/stories/company-news';
import Publish from '@/components/backendStories/publish'
import {
  getToken,
  getUserRoles
} from '../service/tokenService';
import store from '../store/'

Vue.use(Router)

const router = new Router({
  routes: [{
    path: '/',
    name: 'Dashboard',
    component: Dashboard
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/one',
    name: 'StoryOne',
    component: StoryOne,
    meta: {
      requiresAuth: true,
      requiresRolesCheck: true,
    }
  },
  {
    path: '/two',
    name: 'StoryTwo',
    component: StoryTwo,
    meta: {
      requiresAuth: true,
      requiresRolesCheck: true,
    }
  },
  {
    path: '/three',
    name: 'StoryThree',
    component: StoryThree,
    meta: {
      requiresAuth: true,
      requiresRolesCheck: true,
    }
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: Dashboard,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/docs',
    name: 'DevDocs',
    component: DevDocs
  },
  {
    path: '/Pictures',
    name: 'Pictures',
    component: Pictures
  },
  {
    path: '/Company',
    name: 'Company',
    component: Company
  },
  {
    path: '/rewards',
    name: 'CompanyRewards',
    component: CompanyRewards
  },
  {
    path: '/news',
    name: 'CompanyNews',
    component: CompanyNews
  },
  {
    path: '/Publish',
    name: 'Publish',
    component: Publish
  },
  {
    path: '/Contents',
    name: 'Contents',
    component: Contents
  }
  ]
})


router.beforeEach((to, from, next) => {
  console.log(to)
  if (to.meta.requiresAuth) {
    let token = getToken();
    if (token) {
      if (to.meta.requiresRolesCheck) {
        checkComponentAuth(to, next);
      } else {
        next()
      }
    } else {
      next({
        path: '/'
      });
      store.commit('ERROR_POPUP', {
        message: 'User is not logined successful yet!!',
        isPopUp: true
      })
    }
  } else {
    next()
  }

})

function checkComponentAuth(to, next) {
  const componentP = store.getters.getComponentPermissions;
  const path = to.path.toString().substring(1);
  const userRoles = getUserRoles();
  if (componentP.data[path]) {
    if (userRoles.length > 0) {
      console.log(path + '----' + componentP.data[path])
      userRoles.some((roles) => {
        if (componentP.data[path].indexOf(roles) > -1) {
          next()
        } else {
          next(false)
          store.commit('ERROR_POPUP', {
            message: `User doesn't have enough role to access '` + path + `'`,
            isPopUp: true
          })
        }
      })
    } else {
      next(false);
      store.commit('ERROR_POPUP', {
        message: `User doesn't have enough role to access '` + path + `'`,
        isPopUp: true
      })
    }
  } else {
    next();
  }
}

export default router
