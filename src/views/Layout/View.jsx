import React,{Component} from 'react';
import { Match, Route } from 'react-router-dom';
import {Layout} from 'antd';
const {Content} = Layout;

import routes from '../../routes'

export default class View extends Component {
  render(){
    return (
      <Content style={{overflow:'initial'}}>
      {routes.map(
        (route,index) => {
          if(route.name==="login")
            return false;
          return (
            <Route key={index} path={route.path} name={route.name} render={props=>(
              <route.component {...props} routes={route.routes}/>
            )}/>
          )
        }
      )}
      </Content>
    )
  }
}