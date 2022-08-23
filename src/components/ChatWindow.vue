<template>
    <div class="chat-window">
        <div v-if="error">{{error}}</div>
        <div v-if="documents" class="messages" ref="messages">
            <div v-for="(doc, index) in formattedDocuments" :key="index" class="message-single">
                <span class="created-at">{{doc.createdAt}}</span>
                <span class="name">{{doc.name}}</span>
                <span class="message">{{doc.message}}</span>
            </div>
        </div>
    </div>
</template>

<script>
    import getCollection from "../composables/getCollection"
    import {
        formatDistanceToNow
    } from 'date-fns'
    import {
        computed,
        onUpdated,
        ref
    } from "vue"

    export default {
        setup() {
            const {
                documents,
                error
            } = getCollection('messages')

            const formattedDocuments = computed(() => {
                if (documents.value) {
                    return documents.map((doc) => {
                        let time = formatDistanceToNow(doc.createdAt.toDate())
                        return {
                            ...doc,
                            createdAt: time
                        }
                    })
                }
            })

            // auto scroll to bottom
            const messagesRef = ref(null)

            onUpdated(() => {
                messagesRef.value.scrollTop = messagesRef.value.scrollHeight
            })

            return {
                documents,
                error,
                formattedDocuments,
                messagesRef
            }
        }
    }
</script>

<style>
    .messages {
        overflow-y: scroll;
        height: 40vh;
    }
</style>