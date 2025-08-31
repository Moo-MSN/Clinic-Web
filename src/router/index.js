import { createRouter, createWebHistory } from "vue-router";

import HomeView from "@/views/users/HomeView.vue";
import AppoinmentView from "@/views/users/AppoinmentView.vue";
import PricingView from "@/views/users/PricingView.vue";
import Orthodontics from "@/views/users/Orthodontics.vue";
import TeethCleaningView from "@/views/users/Teeth cleaningView.vue";
import DentalFillingView from "@/views/users/Dental fillingView.vue";
import DenturesView from "@/views/users/DenturesView.vue";
import RootCanalTreatmentView from "@/views/users/Root canal treatmentView.vue";
import WisdomTeethView from "@/views/users/Wisdom teethView.vue";
import ContactView from "@/views/users/ContactView.vue";



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
      component: AppoinmentView,
    },
    {
      path: "/pricing",
      name: "pricing",
      component: PricingView,
    },
    {
      path: "/services/จัดฟัน",
      name: "orthodontics",
      component: Orthodontics,
    },
    {
      path: "/services/ขูดหินปูน",
      name: "cleaning",
      component: TeethCleaningView,
    },

    {
      path: "/services/อุดฟัน",
      name: "dentalfilling",
      component: DentalFillingView,
    },
    {
      path: "/services/ฟันปลอม",
      name: "denture",
      component: DenturesView,
    },
    {
      path: "/services/ถอนฟัน-ผ่าฟันคุด",
      name: "wisdom",
      component: WisdomTeethView,
    },
    {
      path: "/services/รักษารากฟัน",
      name: "rootcanal",
      component: RootCanalTreatmentView,
    },
    {
      path: "/contact-us",
      name: "contactus",
      component: ContactView,
    },
  ],
});

export default router;
