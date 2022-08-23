<template>
  <form>
        <textarea 
            placeholder="Type a message"
            v-model="message"
            @keypress.enter.prevent="submitForm"
        ></textarea>
        <div>{{error}}</div>
  </form>
</template>

<script>import getUser from "../composables/getUser"
import useCollection from "../composables/useCollection"
import { timestamp } from "../firebase/config"

export default {
    setup(){
        const message = ref('')
        const {user} = getUser()
        const {addDoc, error} = useCollection('messages') 


        const submitForm = async () => {
            const chat = {
                message:message.value,
                name:user.value.displayName,
                created_at: timestamp()
            }

            await addDoc(chat)
            if(!error.value){
                message.value = ''
            }
            
        }

        return {submitForm, error}
    }
}
</script>

<style>

</style>