<template>
    <div class="w-full max-w-md">
        <form
            @submit.prevent="handleSubmit"
            class="bg-darkblue-light shadow-md rounded p-5"
        >
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
                    class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-300 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                />
            </div>
            <div class="flex items-center justify-between">
                <a
                    href="https://github.com/seanmgd/vuejs-chatroom"
                    class="btn-blue-light"
                    type="button"
                    target="_blank"
                >
                    Check github
                </a>
                <button class="btn-blue" type="button">Go chat</button>
            </div>
        </form>
    </div>
</template>

<script>
import { ref } from 'vue'

export default {
    setup() {
        //refs
        const username = ref('')
        const password = ref('')

        const handleSubmit = () => {
            console.log(username.value, password.value)
        }

        return { username, password }
    },
    name: 'SignupForm',
}
</script>

<style scoped></style>
