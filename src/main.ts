import { createApp } from "vue";
import App from "./App.vue";
import nullResponsive from "./nullResponsive";
const nullconfig = {
  inputText:
    "This is the face of a lazy developer, still working on the mobile view mfjpm🙏🏽",
  breakpoint: 1000,
  imgPath: "img.jpeg",
  bg_color: "lavender",
  text_color: "grey",
};

createApp(App).use(nullResponsive, nullconfig).mount("#app");
