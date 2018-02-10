import Home from "./home.vue";
import serverRender from "~/app/web/framework/vue/entry/server.js";
import clientRender from "~/app/web/framework/vue/entry/client.js";
export default (false ? serverRender({ ...Home }) : clientRender({ ...Home }));
