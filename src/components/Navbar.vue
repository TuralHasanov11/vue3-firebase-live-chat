<template>
  <nav>
      <template v-if="user!==null">
           <p>{{user.displayName}}</p>
            <button @click="logoutHandler">Logout</button>
      </template>
  </nav>
</template>

<script>import getUser from "../composables/getUser"
import useLogout from "../composables/useLogout"

export default {
    setup(){

        const {logout, error} = useLogout()
        const {user} = getUser()

        const logoutHandler = async () => {
            await logout()
            if(!error.value){
                // logged out
                
            }else{
                // logout failed
            }
        }

        return {logoutHandler, user}
    }
}
</script>

<style>

</style>