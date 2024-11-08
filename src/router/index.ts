// router/index.js
import { createRouter, createWebHistory } from 'vue-router';
import ResumeView from '../views/ResumeView.vue';
// import DateTime from '../views/DateTime.vue';
// import Event from '../views/Event.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/:tab?',
      name: 'resume',
      component: ResumeView,
      props: true
    },
    // {
    //   path:'/:datetime',
    //   name: 'datetime',
    //   component: DateTime,
    //   // props: true
    // },
    // {
    //   path:'/:event',
    //   name: 'event',
    //   component: Event,
    //   // props: true
    // },
  ]
});

export default router;
