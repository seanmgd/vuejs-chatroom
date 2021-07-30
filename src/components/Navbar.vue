<template>
    <nav
        class="flex justify-between mb-5 bg-gray-800 p-5 rounded-lg"
        v-if="user"
    >
        <div>
            <span>Logged with {{ user.email }} as </span>
            <span class="underline">{{ user.displayName }}</span>
        </div>
        <button @click="handleClick">Log out</button>
    </nav>
</template>

<script>
import useLogout from '../composables/useLogout'
import getUser from '../composables/getUser'
export default {
    name: 'Navbar',
    setup() {
        const { logout, error } = useLogout()
        const { user } = getUser()

        const handleClick = async () => {
            await logout()
        }
        return { handleClick, user }
    },
}
</script>

<style scoped></style>
