import React from 'react';
import styles from "./Textarea.module.css";

class Textarea extends React.Component {
  // constructor(props){
  //   // super(props);

  //   // this.state = {
  //   //   fields: {textarea: ''},
  //   //   chrLimit: 600,
  //   //   chrLeft: 600,
  //   // };
  // }


  render() {
    // const { textarea } = this.state.fields;
    return (
      <label className={styles['input-group']} htmlFor={this.props.name}>
        {this.props.name}
        <textarea {...this.props} id={this.props.name} required></textarea>

      </label>
    )
  }
}

export default Textarea;