import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import { Menu, Icon, Avatar } from 'antd';

import './SiderBar.css';

const {SubMenu} = Menu;

class SiderBar extends Component{
  rootSubmenuKeys=['sub1', 'sub2', 'sub3', 'sub4', 'sub5', 'sub6', 'sub7', 'sub8', 'sub9', 'sub10'];
  state = {
    openKeys: ['sub1'],
  };
  onOpenChange = (openKeys) => {
    const latestOpenKey = openKeys.find(key => this.state.openKeys.indexOf(key) === -1);
    if (this.rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
      this.setState({ openKeys });
    } else {
      this.setState({
        openKeys: latestOpenKey ? [latestOpenKey] : [],
      });
    }
  }
  
  render(){
    return (
        <Menu
          mode="inline"
          openKeys={this.state.openKeys}
          onOpenChange={this.onOpenChange}
          style={{ width: "100%" ,height:"100%"}}
          theme="dark"
        >
          <div className="logo">
            <a href="javascript:void(0);">
              <h1>奇点后台</h1>
            </a>
          </div>
          <Avatar size="large" icon="user"></Avatar>
          <div className="welcome-user">欢迎，{`管理员`}</div>

          <Menu.ItemGroup title="交易相关">
            <SubMenu key="sub1" title={<span><Icon type="mail" /><span>存管订单</span></span>}>
              <Menu.Item key="1">
                <Link to="">存管订单</Link>
              </Menu.Item>
              <Menu.Item key="2">
                <Link to="">充/提列表</Link>
              </Menu.Item>
            </SubMenu>
            <SubMenu key="sub2" title={<span><Icon type="appstore" /><span>订单管理</span></span>}>
              <Menu.Item key="3">
                <Link to="">订单管理</Link>
              </Menu.Item>
              <Menu.Item key="4">
                <Link to="">充/提列表</Link>
              </Menu.Item>
              <Menu.Item key="5">
                <Link to="">订单报表</Link>
              </Menu.Item>
            </SubMenu>
            <SubMenu key="sub3" title={<span><Icon type="mail" /><span>资产管理</span></span>}>
              <Menu.Item key="6">
                <Link to="">资产管理</Link>
              </Menu.Item>
              <Menu.Item key="7">
                <Link to="">资产机构</Link>
              </Menu.Item>
              <Menu.Item key="8">
                <Link to="">企业资产</Link>
              </Menu.Item>
              <Menu.Item key="9">
                <Link to="">申赎报表</Link>
              </Menu.Item>
            </SubMenu>
            <SubMenu key="sub4" title={<span><Icon type="setting" /><span>支付管理</span></span>}>
              <Menu.Item key="10">
                <Link to="">支付列表</Link>
              </Menu.Item>
              <Menu.Item key="11">
                <Link to="">清算流水</Link>
              </Menu.Item>
              <Menu.Item key="12">
                <Link to="">清算对账</Link>
              </Menu.Item>
            </SubMenu>
            <SubMenu key="sub5" title={<span><Icon type="setting" /><span>产品管理</span></span>}>
              <Menu.Item key="13">
                <Link to="">产品管理</Link>
              </Menu.Item>
            </SubMenu>
          </Menu.ItemGroup>
          <Menu.ItemGroup title="运营相关">
            <SubMenu key="sub6" title={<span><Icon type="setting" /><span>CRM管理</span></span>}>
              <Menu.Item key="14">
                <Link to="">CRM客户管理</Link>
              </Menu.Item>
              <Menu.Item key="15">
                <Link to="">CRM销售管理</Link>
              </Menu.Item>
              <Menu.Item key="16">
                <Link to="">CRM用户数统计</Link>
              </Menu.Item>
            </SubMenu>
            <SubMenu key="sub7" title={<span><Icon type="setting" /><span>运营管理</span></span>}>
              <Menu.Item key="17">
                <Link to="">贴息管理</Link>
              </Menu.Item>
              <Menu.Item key="18">
                <Link to="">合同管理</Link>
              </Menu.Item>
              <Menu.Item key="19">
                <Link to="">投管报告</Link>
              </Menu.Item>
            </SubMenu>
            <SubMenu key="sub8" title={<span><Icon type="setting" /><span>账户管理</span></span>}>
              <Menu.Item key="20">
                <Link to="">用户账户</Link>
              </Menu.Item>
              <Menu.Item key="21">
                <Link to="">奇点账户</Link>
              </Menu.Item>
            </SubMenu>
            <SubMenu key="sub9" title={<span><Icon type="setting" /><span>客户管理</span></span>}>
              <Menu.Item key="22">
                <Link to="">企业管理</Link>
              </Menu.Item>
              <Menu.Item key="23">
                <Link to="">客户管理</Link>
              </Menu.Item>
            </SubMenu>
            <SubMenu key="sub10" title={<span><Icon type="setting" /><span>基础管理</span></span>}>
              <Menu.Item key="24">
                <Link to="">用户列表</Link>
              </Menu.Item>
              <Menu.Item key="25">
                <Link to="">角色管理</Link>
              </Menu.Item>
              <Menu.Item key="26">
                <Link to="">权限管理</Link>
              </Menu.Item>
              <Menu.Item key="27">
                <Link to="">组织架构</Link>
              </Menu.Item>
              <Menu.Item key="28">
                <Link to="">抓取收益</Link>
              </Menu.Item>
            </SubMenu>
          </Menu.ItemGroup>
        </Menu>
    )
  }
}

export default SiderBar;