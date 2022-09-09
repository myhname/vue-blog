import { ref, reactive, computed, watch, watchEffect } from "vue"
import axios from 'axios'

const getPost = (id) => {

    const post = ref({});

    const load = async () => {
        try {
            let {data} = await axios("http://49.232.88.154:3030/posts/" + id)
            post.value = data
        } catch(error){
            console.log(error)
        }
    }

    return { post , load }
}

export default getPost