import App from './App.vue';
import './main.css';
import router from './router';

const pinia = createPinia();

createApp(App).use(router).use(pinia).mount('#app');
