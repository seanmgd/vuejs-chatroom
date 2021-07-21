<template>
    <nav class="flex justify-center" v-if="user">
        <div>
            <span> {{ user.displayName }} </span>
            <span> {{ user.email }} </span>
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
            if (!error.value) {
                console.log('logout')
            }
        }
        return { handleClick, user }
    },
}
</script>

<style scoped></style>
