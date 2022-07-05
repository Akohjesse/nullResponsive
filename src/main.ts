import { createApp } from "vue";
import App from "./App.vue";
import nullResponsive from "./nullResponsive";
const nullconfig = {
  inputText:"no break him preeq oh",
  imgPath: "img.jpeg",
};

createApp(App).use(nullResponsive, nullconfig).mount("#app");
