import { createRouter, createWebHistory } from 'vue-router';
import CustomerDetails from "../views/CustomerDetails.vue";
import Customers from "../views/Customers.vue";
import Dashboard from "../views/Dashboard.vue";
import Employee from "../views/Employee.vue";
import HomeView from '../views/HomeView.vue';

const router = createRouter({
  // history: createWebHistory(import.meta.env.BASE_URL),
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: HomeView
    },
    {
      path: '/customers',
      name: 'Customers',
      component: Customers
    },
    {
      path: '/customers/view/:id',
      name: 'CustomerDetails',
      component: CustomerDetails
    },
    {
      path: '/dashboard',
      name: 'Dashboard',
      component: Dashboard
    },
    {
      path: '/employee',
      name: 'Employee',
      component: Employee
    },
    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (About.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import('../views/AboutView.vue')
    // }
  ]
})

export default router
