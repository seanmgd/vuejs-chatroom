<template>
    <div v-if="showLogin" class="w-full max-w-md">
        <LoginForm />
        <a @click="showLogin = !showLogin" class="underline">
            No account yet ? Signup
        </a>
    </div>
    <div v-else class="w-full max-w-md">
        <SignupForm />
        <a @click="showLogin = !showLogin" class="underline">
            Already have an account ? Login
        </a>
    </div>
</template>

<script>
import SignupForm from '../components/SignupForm.vue'
import LoginForm from '../components/LoginForm.vue'
import { ref } from 'vue'

export default {
    name: 'Welcome',
    components: { SignupForm, LoginForm },
    setup() {
        const showLogin = ref(true)

        return { showLogin }
    },
}
</script>
