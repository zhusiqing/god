import React,{Component} from 'react';
import {Avatar,Menu,Dropdown,Icon} from 'antd';

import './Head.css';

const menu = (
  <Menu style={{marginTop:"-12px"}}>
    <Menu.Item key="0">
      <a target="_blank" rel="noopener noreferrer" href="#">个人设置</a>
    </Menu.Item>
    <Menu.Item key="1">
      <a target="_blank" rel="noopener noreferrer" href="#">技术协助</a>
    </Menu.Item>
    <Menu.Divider />
    <Menu.Item key="3">安全退出</Menu.Item>
  </Menu>
)

export default class Head extends Component{
  render(){
    return (
      <div>
        <div className="head-user">
          <Dropdown overlay={menu} trigger={['click']} placement="bottomRight">
            <a href="javascript:void(0);" className="ant-dropdown-link">
              <div className="avatar">
                <Avatar icon="user" size="small"></Avatar>              
              </div>
              <div style={{height:24,float:"left",fontSize:14}}>管理员</div>
              <Icon type="down"></Icon>
            </a>
          </Dropdown>
        </div>
      </div>
    )
  }
}