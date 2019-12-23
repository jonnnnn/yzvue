import Vue from 'vue'
import Router from 'vue-router'
import Dj from '@/components/Dj'
import Fp from '@/components/Fp'
import Yz from '@/components/Yz'
import MM from '@/components/MM'

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Yz',
      component: Yz
    },
    {
      path: '/Dj',
      name: 'Dj',
      component: Dj
    },
    {
      path: '/Fp',
      name: 'Fp',
      component: Fp
    },
    {
      path: '/MM',
      name: 'MM',
      component: MM
    }
  ]
});


