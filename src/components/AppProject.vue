<script>

export default{
    name: 'AppProject',
    props: ['title', 'description', 'slug', 'type', 'technology','img'],
    
    components:{
       
    },
  data() {
    return {
      
    }
  },
  methods: {
 
    
  },
  mounted() {

  },
}
</script>

<template>



    <router-link :to="{ name: 'single-project', params: { slug: slug } }" class="nav-link active">
        <div class="card">
            <img class="card-img-top" :src=' `http://127.0.0.1:8000/storage/${img}` '  alt="Title" />
            <div class="card-body">
                <h4 class="card-title">{{ title }}</h4>
                <p class="card-text">{{ description }}</p>
                <p>Type: {{ type }}</p>
                <p>Technology: 
                    <span v-for="(item, index) in technology" :key="index">{{ item.name }}</span>
                    
                </p>
            </div>
        </div>

    </router-link>


</template>

<style scoped>
img{
    width: 20%;
}
</style>