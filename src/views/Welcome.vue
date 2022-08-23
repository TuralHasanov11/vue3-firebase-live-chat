<template>
  <div class="welcome">
      <template v-if="isLogin">
        <h2>Login</h2>
        <Login @login="enterChat" />
        <p>No account? <span @click="isLogin=false">Create an account</span></p>
      </template>
      <template v-else>
        <h2>Register</h2>
         <Register @register="enterChat" />
          <p>Already have an account? <span @click="isLogin=true">Login to your account</span></p>
      </template>

  </div>
</template>

<script>
import Register from "../components/Register.vue";
import Login from "../components/Login.vue";
import { ref } from "vue";
import { useRouter } from "vue-router";

export default {
    name: "welcome",
    setup(){
      const isLogin = ref(true)

      const router = useRouter()

      const enterChat = () => {
        router.replace({name:'ChatRoom'})
      }

      return {isLogin, enterChat}
    },
    components: { Register, Login }
}
</script>
