import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import HomePage from '../views/HomePage.vue';
import MoviesDetails from '../views/MoviesDetails.vue';

const route: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'HomePage',
    component: HomePage,
  },
  {
    path: '/movie/:id',
    name: 'MoviesDetails',
    component: MoviesDetails,
    props: true,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes: route,
});

export default router;
