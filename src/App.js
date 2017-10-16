import React, {Component} from 'react';
import { BrowserRouter, HashRouter, Router, Match, Route, Link, hashHistory, StaticRouter, browserHistory } from 'react-router-dom';
import createHistory from 'history/createHashHistory';
// import createHistory from 'history/createBrowserHistory';
import {Layout,Icon} from 'antd';
const {Header,Footer,Sider,Content} = Layout;

import './reset.css';
import './App.css';

import routes from './routes';
import SiderBar from './views/Layout/SiderBar.jsx';
import Head from './views/Layout/Head.jsx';
import View from './views/Layout/View.jsx';

const history = createHistory();

class App extends Component{
  state={
    collapsed:false
  }
  toggle = ()=>{
    this.setState({
      collapsed:!this.state.collapsed
    })
  }
  render(){
    return (
      <Router history = { history } >
        <Layout>
          <Sider><SiderBar></SiderBar></Sider>
          <Layout>
            <Header>
              <Head></Head>
            </Header>
            <Content>
              <View></View>
            </Content>
            <Footer></Footer>
          </Layout> 
        </Layout>
      </Router>
    );
  }
}
export default App;
