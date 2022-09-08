<script setup>
import {ref} from "vue";
import axios from "axios";
import { useRouter } from "vue-router";

const title = ref("")
const body = ref("")
const tags = ref([])
const tag = ref("")
const router = useRouter()

const handleKeydown = ()=>{
    if(!tags.value.includes(tag)){
        tag.value = tag.value.replace(/\s/g,'')
        tags.value.push(tag.value)
    }
    tag.value = ""
}

// 这里要做一下行为优化，清空、跳转、成功失败提示
const handleSubmit = async()=>{
    const post = {
        title: title.value,
        body: body.value,
        //测试用，id赋值要优化
        id: Math.floor(Math.random()*10000),
        tags: tags.value
    }
    const data = await axios.post("http://localhost:3000/posts", post)
    if(data.status === 201){
        router.push("/")
    }
}

</script>

<template>
    <div class="create">
        <form @submit.prevent="handleSubmit">
            <label for="title">标题</label>
            <input type="text" v-model="title" required />
            <label for="body">简介</label>
            <textarea v-model="body"></textarea>
            <label for="tag">标签（回车添加标签）</label>
            <input type="text" v-model="tag" @keydown.enter.prevent="handleKeydown" />

            <div v-for="tag in tags" :key="tag" class="pill">#{{tag}}</div>

            <button>添加</button>
        </form>
    </div>
</template>
  
<style scoped>
form {
  max-width: 30rem;
  margin: 0 auto;
  text-align: left;
}
input,
textarea {
  display: block;
  margin: .625rem 0;
  width: 100%;
  box-sizing: border-box;
  padding: .625rem;
  border: .0625rem solid #eee;
}
textarea {
  height: 10rem;
}
label {
  display: inline-block;
  margin-top: 1.875rem;
  position: relative;
  font-size: 1.25rem;
  margin-bottom: .625rem;
}
button {
  display: block;
  margin-top: 1.875rem;
  background: #ff8800;
  color: white;
  border: none;
  padding: .5rem 1rem;
  font-size: 1.125rem;
}
.pill {
  display: inline-block;
  margin: .625rem .625rem 0 0;
  color: #444;
  background: #ddd;
  padding: .5rem;
  border-radius: 1.25rem;
  font-size: .875rem;
}  
</style>