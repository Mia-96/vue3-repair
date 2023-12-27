import "./assets/main.css";

import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
// 1. 引入你需要的组件
import { Button } from "vant";
import { Image as VanImage } from "vant";
import { Tabbar, TabbarItem } from "vant";
import { Form, Field, CellGroup, Tag } from "vant";
import { Tab, Tabs } from "vant";
// import { Tag, , Field, CellGroup } from "vant";
// 2. 引入组件样式
import "vant/lib/index.css";
import axios from "axios";
import "@/mock/mockServer";

const app = createApp(App);

app.use(router);
// 3. 注册你需要的组件
app.use(Button);
app.use(VanImage);
app.use(Tabbar);
app.use(TabbarItem);
app.use(Form);
app.use(Field);
app.use(CellGroup);
app.use(Tab);
app.use(Tabs);
app.use(Tag);

app.use(Field);
app.use(CellGroup);
app.mount("#app");
