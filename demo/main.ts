import { createApp } from 'vue'
import DividedCircle from '../src/index'
import App from './App.vue'

const app = createApp(App)
app.component('DividedCircle', DividedCircle)
app.mount('#app')
