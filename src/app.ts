import Koa, {Context} from "koa";
import Pug from "koa-pug";
import path from "path";
import serve from "koa-static";
import {config} from "dotenv";
import {router} from "./routes";

config()

const app = new Koa();

const pug = new Pug({
    viewPath: path.resolve(__dirname, '../views'),
    app: app
})

// configure static assets
const root = path.resolve(__dirname, '../assets');
console.log("Assets path:", root)
app.use(serve(root));

// configure routes
app
    .use(router.routes())
    .use(router.allowedMethods());

// Start Koa app
const port = process.env.PORT || 3000;
app.listen(port)
    .on("listening", () => console.log(`Server started: http://localhost:${port}`))
