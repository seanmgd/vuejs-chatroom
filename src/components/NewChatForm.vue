<template>
    <form>
        <input
            placeholder="Write your message here and press enter"
            v-model="message"
            class="w-full bg-gray-800 outline-none p-3 rounded-lg"
            @keypress.enter.prevent="handleSubmit"
        />
        <div class="text-center mb-3 text-red-400">{{ error }}</div>
    </form>
</template>

<script>
import { ref } from 'vue'
import getUser from '../composables/getUser'
import { timestamp } from '../firebase/config'
import useCollection from '../composables/useCollection'

export default {
    name: 'NewChatForm',
    setup() {
        const { user } = getUser()
        const { addDoc, error } = useCollection('messages')
        const message = ref('')

        const handleSubmit = async () => {
            const chat = {
                name: user.value.displayName,
                message: message.value,
                createdAt: timestamp,
            }

            await addDoc(chat)
            if (!error.value) {
                message.value = ''
            }
        }
        return { message, handleSubmit, error }
    },
}
</script>

<style scoped></style>
