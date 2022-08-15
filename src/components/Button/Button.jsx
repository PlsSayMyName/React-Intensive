import React from 'react';
import styles from "./Button.module.css";

class Button extends React.Component {
  render() {
    return (
      <button {...this.props} className={styles.button}>{this.props.name}</button>
    )
  }
}

export default Button;