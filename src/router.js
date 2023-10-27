import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

export default new VueRouter({
  mode: "history",
  routes: [
    {
      path: "/",
      component: () => import("@/views/login/Login.vue"),
    },
    {
      path: "/drones",
      component: () => import("@/views/drones/DronesList.vue"),
    },
    {
      path: "/drones/create",
      component: () => import("@/views/drones/DroneCreate.vue"),
    },
    {
      path: "/drones/:id/",
      component: () => import("@/views/drones/DroneUpdate.vue"),
    },
    {
      path: "/track",
      component: () => import("@/views/track/Track.vue"),
    },
    {
      path: "/orders",
      component: () => import("@/views/orders/OrdersList.vue"),
    },
  ],
});
