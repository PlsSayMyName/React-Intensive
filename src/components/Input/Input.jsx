import React from "react";
import styles from "./Input.module.css";

const Input = (props) => {
	return (
		<>
			<label className={styles["input-group"]} htmlFor={props.labelname}>
				{props.labelname}
				<input {...props} id={props.labelname} required />
			</label>
			<span style={{ color: "red" }}>{props.error}</span>
		</>
	);
};

export default Input;
