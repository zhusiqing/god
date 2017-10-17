import React,{Component} from 'react';
import { Form, Row, Col, Input, Button, Icon } from 'antd';

const FormItem = Form.Item;

export default class Order_depository extends Component{
  state = {
    expand:false
  }
  render(){
    return (
      <div>
        <h2>存管订单列表</h2>
        <hr/>
      </div>
    )
  }
}