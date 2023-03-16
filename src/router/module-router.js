const ContactPage = () =>
  import(
    /* webpackChunkName: "ContactPage" */ '@/views/Contact/ContactPage.vue'
  )

import HomePage from '@/views/Home/HomePage.vue'

export const routes = [
    {
        path: '/',
        name: 'home',
        component: HomePage
      },
      {
        path: '/contact',
        name: 'contact',
        component: ContactPage
      }
]



