
import './styles/style.scss'
import * as bootstrap from 'bootstrap'
import { createApp } from 'vue'
import {router} from './router'
import App from './App.vue'


createApp(App).use(router).mount('#app')
