import { createApp } from 'vue'
import App from './App.vue'
import Header from './pages/Header.vue'

const app = createApp(App)
// 在这中间写组件的注册，全局注册
//component第一个变量为引用名，第二个为对应引入的组件
app.component("Header",Header)

app.mount('#app')