import React, {Component} from 'react';

import Login from '../views/Login/Login.jsx';
import Home from '../views/Home/Home.jsx';

const routes = [
  { path:"/",name:"home",component:Home,},
  { path:"/login",name:"login",component:Login,},
]
export default routes;
