<script setup>

import SinglePost from "./SinglePost.vue"
import { onMounted, onUnmounted, onUpdated } from 'vue'

onMounted(() => {

})


onUnmounted(() => {
    
})

onUpdated(() => {
    
})

defineProps({
    postls: Array
})

</script>

<template>
    <div class="post-list">
        <div v-for="postl in postls" :key="postl.id">
            <SinglePost :post="postl" />
        </div>
    </div>
</template>

<style >

</style>
