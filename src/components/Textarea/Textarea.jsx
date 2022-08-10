import React from 'react';
import styles from "./Textarea.module.css";

class Textarea extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <label className={styles['input-group']} htmlFor={this.props.name}>
        {this.props.name}
        <textarea name={this.props.name} id={this.props.name}></textarea>
      </label>
    )
  }
}

export default Textarea;