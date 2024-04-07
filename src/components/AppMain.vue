<script >
import axios from 'axios';
export default{
  name: 'AppMain',
  data() {
    return {
      arrayProjct: [],
      currentPage:'',
      lastPage:''
    }
  },
  methods: {
    getProjects(projectApiPage){
      axios.get('http://127.0.0.1:8000/api/test',
      {
        params:{
          page: projectApiPage

        }
      }
    
    )
      .then(res => {
        
        this.arrayProjct= res.data.projects.data
        this.currentPage=res.data.projects.data.current_page
        this,this.lastPage= res.data.projects.data.last_page
        console.log(this.arrayProjct)
      })

    }
    
  },
  mounted() {
    this.getProjects()
  },
}

</script>

<template>
  <div class="d-flex flex-column justify-content-center align-items-center">
    
    <a class="py-1" v-for="(item, index) in arrayProjct" :key="item.id">{{ item.title }}</a>
    <nav aria-label="Page navigation example">
  <ul class="pagination">
    <li class="page-item"><a class="page-link" href="#">Previous</a></li>
    <li class="page-item"><a class="page-link" href="#">1</a></li>
    <li class="page-item"><a class="page-link" href="#">2</a></li>
    <li class="page-item"><a class="page-link" href="#">3</a></li>
    <li class="page-item"><a class="page-link" href="#">Next</a></li>
  </ul>
</nav>

  </div>
</template>

<style scoped>
span{
  font-size: large;
}
</style>
