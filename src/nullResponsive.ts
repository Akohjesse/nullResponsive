import type { App} from "vue"
import { nullResponsive } from "./components";

export default {
    install: (app: App)=>{
        app.component("nullResponsive", nullResponsive)
    }
}



export { nullResponsive};