import Vue from 'vue'
import Router from 'vue-router'
import PostPage from '@/views/PostPage'
import IndexPage from '@/views/IndexPage'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'IndexPage',
      component: IndexPage
    },
    {
      path: '/post',
      name: 'PostPage',
      component: PostPage
    }
  ]
})
