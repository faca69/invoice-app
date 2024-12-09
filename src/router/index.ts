import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AddInvoiceView from '@/views/AddInvoiceView.vue'
import InvoicesView from '@/views/InvoicesView.vue'
import NotFoundView from '@/views/NotFoundView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/add-invoice',
      name: 'add-invoice',
      component: AddInvoiceView,
    },
    {
      path: '/invoices',
      name: 'invoices',
      component: InvoicesView,
    },
    {
      path: '/:catchAll(.*)',
      name: 'not-found',
      component: NotFoundView,
    },
  ],
})

export default router
