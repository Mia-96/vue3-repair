import { createRouter, createWebHistory } from "vue-router";
import HomePage from "../views/HomePage.vue";

import RepairList from "../views/RepairList.vue";
import PersonalCenter from "../views/PersonalCenter.vue";

import RepairDetail from "../views/RepairDetail.vue";
import codeRepair from "../views/codeRepair.vue";
import Index from "../views/Index.vue";
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    // {
    //   path: '/',
    //   name: 'index',
    //   component: Index
    // },
    {
      path: "/home",
      name: "home",
      component: HomePage,
    },
    {
      path: "/repair-list",
      name: "repairList",
      component: RepairList,
    },
    {
      path: "/repair-detail",
      name: "repairDetail",
      component: RepairDetail,
    },
    {
      path: "/user",
      component: PersonalCenter,
    },
    {
      path: "/code-repair",
      component: codeRepair,
    },
  ],
});

export default router;
