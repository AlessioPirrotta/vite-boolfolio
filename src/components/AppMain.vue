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
        this.currentPage=res.data.projects.current_page
        this.lastPage= res.data.projects.last_page
        console.log(this.arrayProjct)
      })

    }
    
  },
  mounted() {
    this.getProjects(1)
  },
}

</script>

<template>
  <div class="d-flex flex-column justify-content-center align-items-center">
    
    <a class="py-1" v-for="(item, index) in arrayProjct" :key="item.id">{{ item.title }}</a>
    <nav aria-label="Page navigation example">
  <ul class="pagination">
    <li class="page-item" :class="{ disabled: currentPage === 1 }">
      <button class="page-link"  @click="getProjects(currentPage - 1)">Previous</button>
    </li>
    <li class="page-item" :class="{ disabled: currentPage === lastPage }">
      <button class="page-link" @click="getProjects(currentPage + 1)">Next</button>
    </li>
  </ul>
</nav>

  </div>
</template>

<style scoped>
span{
  font-size: large;
}
</style>
