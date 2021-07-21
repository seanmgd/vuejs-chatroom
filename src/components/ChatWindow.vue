<template>
    <div class="container">
        <div class="text-center mb-3 text-red-400" v-if="error">
            {{ error }}
        </div>
        <div v-if="documents">
            <div v-for="doc in documents" :key="doc.id">
                <span>{{ doc.createdAt.toDate() }}</span>
                <span>{{ doc.name }}</span>
                <span>{{ doc.message }}</span>
            </div>
        </div>
    </div>
</template>

<script>
import getCollection from '../composables/getCollection'
export default {
    name: 'ChatWindow',
    setup() {
        const { error, documents } = getCollection('messages')

        return { error, documents }
    },
}
</script>

<style scoped></style>
