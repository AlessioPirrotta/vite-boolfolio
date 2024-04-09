<script>
import axios from 'axios';

export default{
    name:'SingleProject',
    components: {
       
    },
  data() {
    return {
      project: null
    }
  },
  methods: {
    getSingleProject(){
      axios.get(`http://127.0.0.1:8000/api/test/${this.$route.params.slug}`)
      .then(res => 
        {
            this.project = res.data.projects;
        });
        
        console.log(this.project);
    }
    
  },
  created() {
    this.getSingleProject();
  },
}
</script>

<template>
    <h1>{{project.title}}</h1>
</template>

<style scoped>

</style>