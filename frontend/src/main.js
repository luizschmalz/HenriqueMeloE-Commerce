import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router'
import store from './stores/creditCards';

createApp(App).use(router).use(store).use(index).mount('#app')
import index from './stores/index';

