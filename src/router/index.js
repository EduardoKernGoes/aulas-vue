import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../pages/HomePage.vue')
    },
    {
      path: '/posts',
      name: 'posts',
      component: () => import('../pages/PostsPage.vue')
    },
    {
      path: '/albuns',
      name: 'albums',
      component: () => import('../pages/AlbumsPage.vue')
    },
  ],
})

export default router