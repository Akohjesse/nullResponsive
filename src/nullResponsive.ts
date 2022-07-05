import type { App } from "vue";
import { nullResponsive } from "./components";

export default {
  install: (app: App, options: object = {}) => {
    app.component("nullResponsive", nullResponsive);
    app.provide("useNull", options);
  },
};

export { nullResponsive };
