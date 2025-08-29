import { createRouter, createWebHistory } from "vue-router";


import HomeView from "@/views/users/HomeView.vue";
import AppoinmentView from "@/views/users/AppoinmentView.vue";
import PricingView from "@/views/users/PricingView.vue";
import ServiceView from "@/views/users/ServiceView.vue";


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [ 
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/appointment",
      name: "appointment",
      component: AppoinmentView
    },
    {
      path: "/pricing",
      name: "pricing",
      component: PricingView
    },
      {
      path: "/services/จััดฟัน",
      name: "services",
      component: ServiceView
    },

  ],
});

export default router;
