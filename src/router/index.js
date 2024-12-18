import { createRouter, createWebHistory } from 'vue-router'
import AprilView from '../views/AprilView.vue'
import AprilView11 from '../views/AprilView11.vue'
import AprilView24 from '../views/AprilView24.vue'
import ImageGallery from '../views/ImageGallery.vue'
import NickName from '../views/NickName.vue'
import OctView from '../views/OctView.vue'
import OctView2 from '../views/OctView2.vue'
import OctView12 from '../views/OctView12.vue'
import MainView from '../views/MainView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'MainView',
      component: MainView
    },
    {
      path: '/AprilView',
      name: 'AprilView',
      component: AprilView
    },
    {
      path: '/AprilView11',
      name: 'AprilView11',
      component: AprilView11
    },
    {
      path: '/AprilView24',
      name: 'AprilView24',
      component: AprilView24
    },
    {
      path: '/ImageGallery',
      name: 'ImageGallery',
      component: ImageGallery
    },
    {
      path: '/OctView',
      name: 'OctView',
      component: OctView
    },
    {
      path: '/OctView2',
      name: 'OctView2',
      component: OctView2
    },
    {
      path: '/OctView12',
      name: 'OctView12',
      component: OctView12
    },
    {
      path: '/nickname',
      name: 'nickname',
      component: NickName
    },
    
  ],
})

export default router
