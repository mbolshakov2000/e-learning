<template>
    <v-card 
    
    :loading="loading"
    class="mx-auto my-12"
    max-width="374" min-height="500"
  >
    <template slot="progress">
      <v-progress-linear
        color="deep-purple"
        height="10"
        indeterminate
      ></v-progress-linear>
    </template>

    <v-img
      height="250"
      :src="getImg"
    ></v-img>

    <v-card-title><router-link style="font-size: 30px; color: black; text-decoration:none;" :to="sectionUrl">{{title}}</router-link></v-card-title>
    <v-divider class="mx-4"></v-divider>
    <v-card-text>{{body}}</v-card-text>
  </v-card>
</template>

<script>
export default {
  name: 'OneSection',
  props: {
      id: Number,
      title: String,
      body: String,
      image: String
  },
  data(){
    return {
      checked: this.publish
    }
  },
  computed:{
    sectionUrl(){
      if (this.id == 4)
        return '/finalTest';
      else if (this.id == 5)
        return '/finalTask';
      else
        return '/section'+this.id;
    },
    getImg(){
      return require(`/${this.image}`);
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.art{
  border: thick double #32a1ce;
}
.notPublished{
    color: red;
}
</style>
