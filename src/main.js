// Plugins
import { registerPlugins } from "@/plugins";
import createRouter from "./router/index.js";
import VueDOMPurifyHTML from "vue-dompurify-html";
// Components
import App from "./App.vue";

// Composables
import { createApp } from "vue";

const app = createApp(App);

registerPlugins(app);
app.use(VueDOMPurifyHTML, {
  namedConfigurations: {
    plaintext: {
      USE_PROFILES: { html: false },
    },
  },
});

app.use(createRouter(app)).mount("#app");
