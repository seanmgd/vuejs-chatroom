<template>
    <form
        @submit.prevent="handleSubmit"
        class="bg-darkblue-light shadow-md rounded p-5 pt-2"
    >
        <h1 class="text-center">Register</h1>
        <div class="mb-4">
            <label
                class="block text-gray-300 text-sm font-bold mb-2"
                for="username"
            >
                Username
            </label>
            <input
                id="username"
                type="text"
                autocomplete="off"
                required
                placeholder="Username"
                v-model="username"
                class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-900 leading-tight focus:outline-none focus:shadow-outline"
            />
        </div>
        <div class="mb-4">
            <label
                class="block text-gray-300 text-sm font-bold mb-2"
                for="email"
            >
                Email
            </label>
            <input
                id="email"
                type="text"
                autocomplete="off"
                required
                placeholder="Email"
                v-model="email"
                class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-900 leading-tight focus:outline-none focus:shadow-outline"
            />
        </div>
        <div class="mb-6">
            <label
                class="block text-gray-300 text-sm font-bold mb-2"
                for="password"
            >
                Password
            </label>
            <input
                id="password"
                type="password"
                required
                placeholder="Password"
                v-model="password"
                class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-900 leading-tight focus:outline-none focus:shadow-outline"
            />
        </div>
        <div class="text-center mb-3 text-red-400">{{ error }}</div>
        <div class="flex items-center justify-between">
            <a
                href="https://github.com/seanmgd/vuejs-chatroom"
                class="btn-blue-light"
                type="button"
                target="_blank"
            >
                Check github
            </a>
            <button class="btn-blue" type="submit">Register</button>
        </div>
    </form>
</template>

<script>
import { ref } from 'vue'
import useSignup from '../composables/useSignup'

export default {
    setup(props, context) {
        const { error, signup } = useSignup()

        const email = ref('')
        const username = ref('')
        const password = ref('')

        const handleSubmit = async () => {
            await signup(email.value, username.value, password.value)
            if (!error.value) {
                context.emit('signup')
            }
        }

        return { email, username, password, handleSubmit, error }
    },
    name: 'SignupForm',
}
</script>

<style scoped></style>
