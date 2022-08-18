<template>

  <div class="container-fluid">
    <div class="row d-flex justify-content-center text-center">
      <div class="card col-6 m-2" v-for="b in blog">
        <h4>{{ b.title }}</h4>
        <img :src="b.imgUrl" alt="" height="300">
        <p><b>{{ b.body }}</b></p>
      </div>
    </div>
  </div>

</template>






<script>
import { onMounted } from "vue";
import { logger } from "../utils/Logger";
import Pop from "../utils/Pop";
import { blogsService } from '../services/BlogsService.js';
import { computed } from "@vue/reactivity";
import { AppState } from "../AppState";


export default {
  setup() {
    async function getBlogs() {
      try {
        await blogsService.getBlogs()
      } catch (error) {
        logger.error(error)
        Pop.toast(error.message, 'error')
      }
    }

    onMounted(() => {
      getBlogs()
    })
    return {

      blog: computed(() => AppState.blog)
    }


      ;
  },
};
</script>
<style>
</style>

