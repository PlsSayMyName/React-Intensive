import React from 'react';
import styles from "./Input.module.css";

class Input extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <label className={styles['input-group']} htmlFor={this.props.name}>
        {this.props.name}
        <input placeholder={this.props.name} type={this.props.type} name={this.props.name} id={this.props.name}/>
      </label>
    )
  }
}

export default Input;