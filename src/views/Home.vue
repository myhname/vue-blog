<script setup>
import PostList from "../components/PostList.vue"
// ref、reactive包裹使得数据具有响应式特性
import { ref, reactive, computed, watch, watchEffect } from "vue"
import getPosts from '../composibles/getPosts'
import Spinner from '../components/Spinner.vue'
import TagCloud from "../components/TagCloud.vue"

// const postls = ref([
//     {title: "个人项目展示——Echart大数据可视化", body:"echartPractive",id: 1},
//     {title: "个人项目展示——vue3+ts电商管理系统", body:"vueTsPractive",id: 2}
// ]);

const { postls, load } = getPosts()

load()

</script>

<template>
    <div class="home">
        <div v-if="postls.length" class="layout">
            <PostList :postls="postls" />
            <TagCloud :postls="postls" />
        </div>
        <div v-else>
            <Spinner />
        </div>
    </div>
</template>

<style scoped>

.home {
  max-width: 75rem;
  margin: 0 auto;
  padding: .625rem;
}
.layout {
  display: grid;
  grid-template-columns: 3fr 1fr;
  gap: 1.25rem;
}

</style>