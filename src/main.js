// Plugins
import { registerPlugins } from "@/plugins";
import createRouter from "./router/index.js";
// Components
import App from "./App.vue";

// Composables
import { createApp } from "vue";

const app = createApp(App);

registerPlugins(app);

app.use(createRouter(app)).mount("#app");
