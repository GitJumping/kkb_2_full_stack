// const koa = require('koa')
// const router = require('koa-router')
//
// // eslint-disable-next-line new-cap
// let server = new koa()
// server.listen(8081)
//
// server.use(async (ctx, next) => {
//   ctx.set('Access-Control-Allow-Origin', '*')
//   await next()
// })
//
// // eslint-disable-next-line new-cap
// let r1 = new router()
// r1.get(`/list`, async ctx => {
//   ctx.body = [
//     {name: '手表', price: '8945.9', sales: 2342},
//     {name: '玩具', price: '234.78', sales: 4568},
//     {name: '衣服', price: '238.46', sales: 3458},
//     {name: '毛巾', price: '89345.45', sales: 123890}
//   ]
// })
//
// server.use(r1.routes())
