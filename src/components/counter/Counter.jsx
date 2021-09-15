import React, { PureComponent } from "react";
import ActionButton from "../shared/buttons/action-button/ActionButton";
import "./Counter.scss";

export default class Counter extends PureComponent {
  constructor() {
    super();
    this.state = {
      value: 0,
    };
  }

  counting() {
    this.setState({
      value: this.state.value + 1,
    });
  }

  render() {
    return (
      <div>
        <input
          className="counter-input"
          value={this.state.value}
          onChange={() => this.counting}
          type="number"
        />
        <ActionButton
          text={"Add"}
          classStyle={"counter-button"}
          click={() => {
            this.counting(this);
          }}
        />
      </div>
    );
  }
}
