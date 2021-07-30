<template>
    <div class="container">
        <div class="text-center mb-3 text-red-400" v-if="error">
            {{ error }}
        </div>
        <div v-if="formattedDocuments">
            <div
                v-for="doc in formattedDocuments"
                :key="doc.id"
                v-bind:class="[
                    user.displayName === doc.name
                        ? 'justify-end text-right'
                        : 'justify-start',
                ]"
                class="flex"
            >
                <div class="mb-4 max-w-md min-w-1/4">
                    <div
                        class="p-4 rounded-lg bg-gray-500 w-full inline-block text-left"
                    >
                        <div class="text-xs">{{ doc.name }}</div>
                        <div>{{ doc.message }}</div>
                    </div>
                    <div
                        class="text-xs italic max-w-md min-w-1/4 text-gray-700"
                        v-bind:class="[
                            user.displayName === doc.name
                                ? 'text-right'
                                : 'text-left',
                        ]"
                    >
                        {{ doc.createdAt }} ago
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import getCollection from '../composables/getCollection'
import { formatDistanceToNow } from 'date-fns'
import getUser from '../composables/getUser'
import { onUpdated, computed } from 'vue'
export default {
    name: 'ChatWindow',
    setup() {
        const { error, documents } = getCollection('messages')
        const { user } = getUser()
        let container
        const formattedDocuments = computed(() => {
            if (documents.value) {
                return documents.value.map((doc) => {
                    let time = formatDistanceToNow(doc.createdAt.toDate())
                    return { ...doc, createdAt: time }
                })
            }
        })
        onUpdated(() => {
            container = document.getElementsByClassName('container')[1]
            container.scrollTo(0, container.scrollHeight)
        })

        return { error, formattedDocuments, user, container }
    },
}
</script>

<style scoped>
.container {
    max-height: 80vh;
    overflow-y: scroll;
    overflow-x: hidden;
}
::-webkit-scrollbar {
    display: none;
}
</style>
