<template>
    <div v-if="showLogin" class="w-full max-w-md">
        <LoginForm @login="enterChat" />
        <a @click="showLogin = !showLogin" class="underline">
            No account yet ? Signup
        </a>
    </div>
    <div v-else class="w-full max-w-md">
        <SignupForm @signup="enterChat" />
        <a @click="showLogin = !showLogin" class="underline">
            Already have an account ? Login
        </a>
    </div>
</template>

<script>
import SignupForm from '../components/SignupForm.vue'
import LoginForm from '../components/LoginForm.vue'
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { projectAuth } from '../firebase/config'

export default {
    name: 'Welcome',
    components: { SignupForm, LoginForm },
    setup() {
        const showLogin = ref(true)
        const router = useRouter()
        if (projectAuth.currentUser) {
            router.push({ name: 'Chatroom' })
        }

        const enterChat = () => {
            router.push({ name: 'Chatroom' })
        }

        return { showLogin, enterChat }
    },
}
</script>
