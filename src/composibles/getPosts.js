import { ref, reactive, computed, watch, watchEffect } from "vue"
import axios from 'axios'

const getPosts = () => {

    const postls = ref([]);

    const load = async () => {
        try {
            let {data} = await axios("http://localhost:3000/posts")
            postls.value = data
        } catch(error){
            console.log(error)
        }
    }

    return { postls , load }
}

export default getPosts