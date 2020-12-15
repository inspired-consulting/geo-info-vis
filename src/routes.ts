import Router = require('@koa/router');
import {Context} from "koa";

export const router = new Router();

// Configure routes
router.get('/', (ctx: Context) => {
    return ctx.render('index');
});
