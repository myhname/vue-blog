<script setup>

import { computed } from "vue";

const props = defineProps({
    post: Object
})

const snippet = computed(() => {
    if(props.post.body.length >= 100){
        return props.post.body.substring(0,100) + "..."
    }
    else return props.post.body
})


</script>

<template>
    <div class="post">
        <router-link :to="{name: 'Details',params: {id: post.id}}">
            <h3> {{ post.title }} </h3>
        </router-link>
        <p> {{ snippet }} </p>
        <span v-for="tag in post.tags" :key="tag" >#{{tag}}</span>
    </div>
</template>

<style>

    .post {
        margin: 0 2.5rem 1.875rem;
        padding-bottom: 1.875rem;
        border-bottom: .0625rem dashed #e7e7e7;
      }
      .post h3 {
        display: inline-block;
        position: relative;
        font-size: 1.625rem;
        color: white;
        margin-bottom: .625rem;
        max-width: 31.25rem;
      }
      .post h3::before {
        content: "";
        display: block;
        width: 100%;
        height: 100%;
        background: #ff8800;
        position: absolute;
        z-index: -1;
        padding-right: 2.5rem;
        left: -1.875rem;
      }
</style>