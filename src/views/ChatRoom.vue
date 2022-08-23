<template>
    <div class="container">
        <Navbar />
        <NewChatForm />
        <ChatWindow />
    </div>
</template>

<script>
import { watch } from "vue"
import { useRouter } from "vue-router"
import Navbar from "../components/Navbar.vue"
import getUser from "../composables/getUser"
import NewChatForm from "../components/NewChatForm.vue"
import ChatWindow from "../components/ChatWindow.vue"

export default {
    name:'ChatRoom',

    setup(){
        const {user} = getUser()
        const router = useRouter()

        watch(user, () => {
            if(!user.value){
                router.replace({name:'Welcome'})
            }
        })
    },

    components:{ Navbar, NewChatForm, ChatWindow }
}
</script>

<style>

</style>