import { createRouter, createWebHistory } from 'vue-router'
import Welcome from '../views/Welcome.vue'
import ChatRoom from '../views/ChatRoom.vue'
import { projectAuth } from '../firebase/config'

// auth guard
const isAuth = (to, from , next) => {
   let user = projectAuth.currentUser
   if(!user){
    next({name:'Welcome'})
   }else{
    next()
   }
}

const guest = (to, from , next) => {
  let user = projectAuth.currentUser
  if(user){
   next({name:'ChatRoom'})
  }else{
   next()
  }
}


const routes = [
  {
    path: '/',
    name: 'Welcome',
    component: Welcome,
    beforeEnter: guest
  },

  {
    path: '/chat-room',
    name: 'ChatRoom',
    component: ChatRoom,
    beforeEnter: isAuth
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
