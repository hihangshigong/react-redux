import React, { PureComponent } from "react";
import { Input, Button, List } from "antd";
import store from '../store'

// import {
//     ADD_TO_ITEM,
//     DELETE_TODO_ITEM,
//     CHANGE_INPUT_VALUE
// } from "../store/actionType"
import {
    getInputChangeAction,
    addtoitemAction,
    deletetodoitemAction
} from '../store/actionCreators'


export default class SGtodolist extends PureComponent {

  constructor(props){
    super(props);
    this.state=store.getState()
    // console.log(this.state)
    this.handleInputChange = this.handleInputChange.bind(this)
    this.hangleStoreChange = this.hangleStoreChange.bind(this)
    this.hangleBtnClick = this.hangleBtnClick.bind(this)
    store.subscribe(this.hangleStoreChange)
  }


  render() {
    return (
      <div style={{ margin: "10px" }}>
        <Input
          value={this.state.inputValue}
          placeholder="todolist"
          style={{ width: "300px", marginRight: "10px" }}
          onChange={this.handleInputChange}
        ></Input>
        <Button type="primary" onClick={this.hangleBtnClick}>提交</Button>
        <List
          style={{marginTop:'10px',width:'300px'}}
          bordered
          dataSource={this.state.list}
          renderItem={(item,index ) => (
            <List.Item onClick={this.handleItemDelete.bind(this,index)}>
               {item}
            </List.Item>
          )}
        />
      </div>
    );
  }
  //修改
  handleInputChange(e){
    // console.log(e.target.value)
    // const action = {
    //     type:CHANGE_INPUT_VALUE,
    //     value:e.target.value
    // }
    const action = getInputChangeAction(e.target.value)
    store.dispatch(action)
  }
  //更新
  hangleStoreChange(){
    this.setState(
        store.getState()
    )
  }
  //提交
  hangleBtnClick(){
    //   const action ={
    //       type:ADD_TO_ITEM,
    //   };
    const action = addtoitemAction()
      store.dispatch(action)
  }
  handleItemDelete(index){
    //   alert(index)
    // const action ={
    //     type:DELETE_TODO_ITEM,
    //     index
    // }
    const action = deletetodoitemAction(index)
    store.dispatch(action)
  }
}
