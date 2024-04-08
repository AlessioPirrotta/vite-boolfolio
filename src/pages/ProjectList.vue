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
    <div class="d-flex flex-column justify-content-center ps-3 pt-3">
        <div class="d-flex flex-column justify-content-center pt-3">
            <ul>
                <li class="py-1" v-for="(item, index) in arrayProjct" :key="item.id">

                    <router-link :to="{name: 'single-project', params: {slug: item.slug} }" class="nav-link active">
                                    {{item.title}}
                    </router-link>
                </li>
            </ul>
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