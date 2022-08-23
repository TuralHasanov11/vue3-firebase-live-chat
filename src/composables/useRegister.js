import { ref } from "vue"
import { projectAuth } from "../firebase/config"

const error = ref(null)

const register = async (email, password, displayName) => {
    error.value = null

    try {
        const res = await projectAuth.createUserWithEmailAndPassword(email, password)

        if(res.ok){
            await res.user.updateProfile({displayName})
            error.value = null
            
            return res
        }else{
            throw new Error('Registration failed!')
        }

    } catch (err) {
        error.value = err.message
    }
}

const useRegister = () => {

    return {error, register}
}

export default useRegister