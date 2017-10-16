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
        (val,index) => <Route path = {val.path} name = {val.name} component = { val.component } key = {index}></Route>
      )}
      </Content>
    )
  }
}