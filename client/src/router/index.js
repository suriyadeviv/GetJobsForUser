import Vue from 'vue'
import Router from 'vue-router'
import UserJobs from '@/components/UserJobs'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/jobs',
      name: 'jobs',
      component: UserJobs
    }
  ]
})
