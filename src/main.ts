import { createApp } from "vue";
import App from "./App.vue";
import nullResponsive from "./nullResponsive";
const nullconfig = {
  inputText:
    "This is the face of a lazy developer, still working on the mobile view mfjpm🙏🏽",
  breakpoint: 1000,
  imgPath: "./src/assets/img.jpeg",
  bg_color: "white",
  text_color: "lightblue",
};

createApp(App).use(nullResponsive, nullconfig).mount("#app");
