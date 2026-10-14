import { aboutController } from "./controllers/about.js";
import { homeController } from "./controllers/home.js";
import { itemsController } from "./controllers/items.js";
import { notFoundController } from "./controllers/notFound.js";
import { staticController } from "./controllers/static.js";
import layout from "./layout.js";

function server(request) {
    const url = new URL(request.url);
    console.log(url.pathname);
    const ctx = { request, url, layout };
    
    if (url.pathname.startsWith("/assets/")) {        
        return staticController(ctx);
    }

    if (url.pathname == "/") {
        return homeController(ctx);
    }

    if (url.pathname == "/about") {
        return aboutController(ctx);
    }

    if (url.pathname == "/items") {
        return itemsController(ctx);
    }

    return notFoundController(ctx);

}

Deno.serve(server);
