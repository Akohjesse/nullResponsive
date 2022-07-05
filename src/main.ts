import { createApp } from "vue";
import App from "./App.vue";
import nullResponsive from "./nullResponsive";
const nullconfig = {
  inputText: "input text",
  breakpoint: 1000,
  bg_color: "purple",
  text_color: "white",
};

createApp(App).use(nullResponsive, nullconfig).mount("#app");
