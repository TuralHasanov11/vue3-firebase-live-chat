<template>
  <form @submit.prevent="submitForm" action="">
        <p class="error">{{error}}</p>
      <input type="email" required placeholder="Email" v-model="email">
      <input type="password" required placeholder="Password" v-model="password">
      <button>Login</button>
  </form>
</template>

<script>import { ref } from "vue"
import useLogin from "../composables/useLogin"

export default {
    setup(){
        const email = ref('')
        const password = ref('')

        const {error, login} = useLogin() 
        
        const submitForm = async () => {
            await login(email.value, password.value)
            
            if(!error.value){
                context.emit('register')
            }
        }

        return {email, password, submitForm, error}
    }
}
</script>

<style>

</style>