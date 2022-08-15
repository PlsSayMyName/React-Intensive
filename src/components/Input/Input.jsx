import React from 'react';
import styles from "./Input.module.css";

class Input extends React.Component {
  render() {
    return (
      <label className={styles['input-group']} htmlFor={this.props.name}>
        {this.props.name}
        <input {...this.props} id={this.props.name} required />
      </label>
    )
  }
}

export default Input;