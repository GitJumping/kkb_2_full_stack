const koa = require('koa');
const router = require('koa-router');
const url = require('url');

// console.log('koa', koa);
// console.log('router', router);
// console.log('url', url);

let server = new koa();
server.listen(8081);

server.use(async (ctx, next)=>{
  if (ctx.request.headers['origin']
    && url.parse(ctx.request.headers['origin']).hostname === 'localhost') {
    ctx.set('Access-Control-Allow-Origin', '*');
  }
  // console.log('server use ', ctx.request);
  await next();
});

let router1 = new router();
server.use(router1.routes());

//接口
//列表：/api/house/page/:page
//  =>{err: false, data: xxx}
//http://localhost:8081/api/house/page/1
router1.get("/api/house/page/:page", async ctx=>{
  // console.log('get 1', ctx.params);
  let {page} = ctx.params;

  //省略中间的 mysql 查询请求

  let data = await [{"ID": "123423dfsevdffvdbbdbbbfg", "admin_ID":"1", "create_time":"1515763993", "title":"流星花园", "sub_title":"", "position_main":"A1", "position_second":"A2", "ave_price":123876, "area_min":0, "area_max":0, "tel":"", "sale_time":0, "submit_time":0, "building_type":"", "main_img_path":"", "main_img_real_path":"", "img_paths":"", "img_real_paths":"", "property_types":"", "property_img_paths":"", "property_img_real_paths":"", "location": null},
    {"ID": "123423dfsevdffvdbbdegrwerrwreg", "admin_ID":"2", "create_time":"1515763993", "title":"流星花园2", "sub_title":"", "position_main":"B1", "position_second":"B2", "ave_price":789234, "area_min":0, "area_max":0, "tel":"", "sale_time":0, "submit_time":0, "building_type":"", "main_img_path":"", "main_img_real_path":"", "img_paths":"", "img_real_paths":"", "property_types":"", "property_img_paths":"", "property_img_real_paths":"", "location": null}];
  if (data.length == 0) {
    ctx.response.body = {err: false, data: []};
  } else {
    ctx.response.body = {err: true, data};
  }
});

//详情：/api/house/:id
//  =>{err: false, data: xxx}
//http://localhost:8081/api/house/123423dfsevdffvdbbdbbbfg
router1.get("/api/house/:id", async ctx=>{
  // console.log('get 2', ctx.params);
  let {page} = ctx.params;

  let data = await [{"ID": "123423dfsevdffvdbbdbbbfg", "admin_ID":"1", "create_time":"1515763993", "title":"流星花园", "sub_title":"", "position_main":"A1", "position_second":"A2", "ave_price":123876, "area_min":0, "area_max":0, "tel":"", "sale_time":0, "submit_time":0, "building_type":"", "main_img_path":"", "main_img_real_path":"", "img_paths":"", "img_real_paths":"", "property_types":"", "property_img_paths":"", "property_img_real_paths":"", "location": null},
    {"ID": "123423dfsevdffvdbbdegrwerrwreg", "admin_ID":"2", "create_time":"1515763993", "title":"流星花园2", "sub_title":"", "position_main":"B1", "position_second":"B2", "ave_price":789234, "area_min":0, "area_max":0, "tel":"", "sale_time":0, "submit_time":0, "building_type":"", "main_img_path":"", "main_img_real_path":"", "img_paths":"", "img_real_paths":"", "property_types":"", "property_img_paths":"", "property_img_real_paths":"", "location": null}];
  // console.log('data.length', data.length);
  if (data.length == 0) {
    ctx.response.body = {err: false, data: null};
  } else {
    ctx.response.body = {err: true, data: data[0]};
  }
});



