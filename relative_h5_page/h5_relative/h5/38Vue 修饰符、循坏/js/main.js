import userComponent from "./user.component.js";
import companyComponent from "./company.component.js";

let route = new VueRouter({
  routes: [
    {
      path: '/user',
      component: userComponent},

    {path: '/company',
      component: companyComponent
    }
  ]
});
