import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
// 1. 引入你需要的组件
import { Button } from 'vant';
import { Image as VanImage } from 'vant';
// 2. 引入组件样式
import 'vant/lib/index.css';

const app = createApp(App)

app.use(router)
// 3. 注册你需要的组件
app.use(Button);
app.use(VanImage);

app.mount('#app')
