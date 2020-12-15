import Router = require('@koa/router');
import {Context} from "koa";
import mock_data from "./mock";

export const router = new Router();

// Configure routes
router.get('/', (ctx: Context) => {
    return ctx.render('index');
});

router.get('/data', (ctx: Context) => {
    return ctx.body = mock_data;
});



