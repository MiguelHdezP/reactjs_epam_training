import React, { PureComponent } from 'react'
import ActionButton from '../shared/buttons/action-button/ActionButton';
import InputText from '../shared/inputText/InputText';
import "./Counter.scss";

export default class Counter extends PureComponent {

  constructor() {
    super();
    this.state = {
      value: 0
    }
  }

  shouldComponentUpdate(nextProps, nextState) {
    if (nextState.value !== this.state.value) return true; 
    else return false;
  }
 
 
  counting(context) {
    context.setState({
      value: context.state.value + 1
    })
    //This will not render, because state does not change
    /*
      context.setState({
        value: 0
      })
    */
  }

  render() {
    return (
      <div>
        <InputText classStyle={"counter-input"} val={this.state.value}/>
        <ActionButton text={"Add"} classStyle={"counter-button"} click={() => {this.counting(this)}}/>
      </div>
    )
  }
}
