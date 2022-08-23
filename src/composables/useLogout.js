import { ref } from "vue"
import { projectAuth } from "../firebase/config"

const error = ref(null)

const logout = async () => {
    error.value = null

    try {
        const res = await projectAuth.signOut()

        if(res.ok){
            error.value = null
            return res 
        }else{
            throw new Error('Logout failed!')
        }

    } catch (err) {
        error.value = err.message
    }
}

const useLogout = () => {

    return {error, logout}
}

export default useLogout