<template>
    <div class="container mx-auto w-1/2">
        <Navbar />
        <ChatWindow />
        <NewChatForm />
    </div>
</template>

<script>
import NewChatForm from '../components/NewChatForm.vue'
import ChatWindow from '../components/ChatWindow.vue'
import Navbar from '../components/Navbar.vue'
import getUser from '../composables/getUser'
import { watch } from 'vue'
import { useRouter } from 'vue-router'
export default {
    name: 'Chatroom',
    components: { ChatWindow, Navbar, NewChatForm },
    setup() {
        const { user } = getUser()
        const router = useRouter()

        watch(user, () => {
            if (!user.value) {
                router.push({ name: 'Welcome' })
            }
        })
    },
}
</script>

<style scoped></style>
