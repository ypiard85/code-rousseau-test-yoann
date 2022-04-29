import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Collection from '../views/Collection.vue'
import SingleCard from '../views/SingleCard.vue'
import AddJeu from '@/views/AddJeu'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/collection/:code',
    name: 'collection',
    component: Collection
  },
  {
    path: '/card/:id',
    name: 'single-card',
    component: SingleCard
  },
  {
    path: '/ajout-d-un-jeu',
    name: 'add-jeu',
    component: AddJeu
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
