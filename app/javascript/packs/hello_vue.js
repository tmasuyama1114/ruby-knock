import { createApp } from 'vue'
import App from './hello.vue'

document.addEventListener('DOMContentLoaded', () => {
    const selector = '#js-hello-vue'; // Vue に置き換えたい HTML の id を指定
    if(document.querySelector(selector)){
        createApp(App).mount(selector);
    }
})