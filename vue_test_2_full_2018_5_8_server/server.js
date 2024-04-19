const koa = require('koa');
const router = require('koa-router');

let server = new koa();
server.use(async (ctx, next)=>{
    ctx.set('Access-Control-Allow-Origin', '*');
    await next()
})
server.listen(8081);

let r1 = new router();
r1.get('/a', ctx=>{
    ctx.body = [1,2,3,4]
});

server.use(r1.routes());