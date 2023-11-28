<template>
  <div style="text-align: center; margin-top:20px;"><h2>О нас</h2>
  <iframe src="https://forms.yandex.ru/u/655a42d65056905a127db6c7/?iframe=1" frameborder="0" name="ya-form-655a42d65056905a127db6c7" width="650"></iframe>
</div>
</template>


<script>
import {mapState} from 'vuex'
import {Types} from '@/store/types.js';
export default {
  name: 'AboutUs',
  props: {
      
  },
  data () {
      return {
        items: [
          {
            src: 'https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg',
          },
          {
            src: 'https://cdn.vuetifyjs.com/images/carousel/sky.jpg',
          },
          {
            src: 'https://cdn.vuetifyjs.com/images/carousel/bird.jpg',
          },
          {
            src: 'https://cdn.vuetifyjs.com/images/carousel/planet.jpg',
          },
        ],
      }
    },
  computed: mapState({
    workers: state => state.workers,
    workers_status: 'workers_status',
  }),
  created() {
    // Instantiate article status constants for template.
    this.SUCCEEDED = Types.request_status.SUCCEEDED;
    this.REQUESTED = Types.request_status.REQUESTED;
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
