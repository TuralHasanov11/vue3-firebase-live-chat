<template>
  <form @submit.prevent="submitForm" action="">
      <p class="error">{{error}}</p>
      <input type="text" required placeholder="Display name" v-model="displayName">
      <input type="email" required placeholder="Email" v-model="email">
      <input type="password" required placeholder="Password" v-model="password">
      <button>Register</button>
  </form>
</template>

<script>
import { ref } from "vue"
import useRegister from "../composables/useRegister"

export default {
    setup(props, context){
        const displayName = ref('')
        const email = ref('')
        const password = ref('')

        const {error, register} = useRegister()

        const submitForm = async () => {
            await register(email.value, password.value, displayName.value)
            
            if(!error.value){
                context.emit('login')
            }
        }

        return {displayName, email, password, submitForm, error}
    }
}
</script>

<style>

</style>