import React,{Component} from 'react';
import {Avatar,Menu,Dropdown,Icon} from 'antd';

import './Head.css';

const menu = (
  <Menu>
    <Menu.Item key="0">
      <a target="_blank" rel="noopener noreferrer" href="http://www.alipay.com/">1st menu item</a>
    </Menu.Item>
    <Menu.Item key="1">
      <a target="_blank" rel="noopener noreferrer" href="http://www.taobao.com/">2nd menu item</a>
    </Menu.Item>
    <Menu.Divider />
    <Menu.Item key="3" disabled>3d menu item（disabled）</Menu.Item>
  </Menu>
)

export default class Head extends Component{
  render(){
    return (
      <div>
        <div className="head-user">
          <Dropdown overlay={menu} trigger={['click']} placement="bottomRight">
            <a href="javascript:void(0);" className="ant-dropdown-link">
              <Avatar icon="user" size="small"></Avatar>
              <span>管理员</span>
              <Icon type="down"></Icon>
            </a>
          </Dropdown>
        </div>
      </div>
    )
  }
}