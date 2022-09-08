<script setup>
import { useRoute } from 'vue-router';
import getPosts from '../composibles/getPosts';
import { computed } from 'vue'
import PostList from '../components/PostList.vue';
import TagCloud from '../components/TagCloud.vue';

const route = useRoute();
const {postls, load} = getPosts();

load()

const postsWithTag = computed(() => {
    return postls.value.filter((p) => p.tags.includes(route.params.tag))
})

</script>

<template>
    <div class="tag">
        <div v-if="postls.length">
            <PostList :postls="postsWithTag" />
            <div class="bottomtag">
                <TagCloud :postls="postls" />
            </div>
        </div>
    </div>
</template>

<style scoped>
    .tag {
        max-width: 1200px;
        margin: 0 auto;
        padding: 10px;
      }
    .bottomtag {
        position: absolute;
        bottom: 5%;
    }
</style>