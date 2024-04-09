<script >
import axios from 'axios';
import AppProject from '../components/AppProject.vue';
export default{
  name: 'AppMain',
    components:{
      AppProject
    },
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
    <div class="d-flex flex-column justify-content-center align-items-center ps-3 pt-3">
        <div class="d-flex flex-column justify-content-center  pt-3">

          <AppProject v-for="(item, index) in arrayProjct" 
          :key="item.id"
          :title="item.title"
          :description="item.description"
          :slug="item.slug"
          :type="item.type? item.type.name : ''"
          :technology="item.technology"
          :img="item.img"

          />


         
        </div>


        
        <nav aria-label="Page navigation example">
            <ul class="pagination">
                <li class="page-item" :class="{ disabled: currentPage === 1 }">
                    <button class="page-link" @click="getProjects(currentPage - 1)">Previous</button>
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