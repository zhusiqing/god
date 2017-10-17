import React, {Component} from 'react';

import Login from '../views/Login/Login.jsx';
import Home from '../views/Home/Home.jsx';
import OrderDepository from '../views/Order_depository/Order_depository.jsx';

const routes = [
  { path:"/home",name:"home",component:Home},
  { path:"/login",name:"login",component:Login},
  { path:"/",name:"order_epository",component:OrderDepository},

]
export default routes;
