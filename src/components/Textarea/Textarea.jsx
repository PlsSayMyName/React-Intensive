import React from "react";
import styles from "./Textarea.module.css";

const chrLimit = 600;

const Textarea = (props) => {
	return (
		<>
			<label className={styles["input-group"]} htmlFor={props.labelname}>
				{props.labelname}
				<textarea
					maxLength={chrLimit}
					{...props}
					id={props.labelname}
					required
				></textarea>
			</label>
			{props.value.length === chrLimit ? (
				<p style={{ color: "red" }}>Исчерпан лимит символов в поле</p>
			) : (
				<p>
					Осталось {chrLimit - props.value.length} символов из{" "}
					{chrLimit}
				</p>
			)}
		</>
	);
};

// class Textarea extends React.Component {
// 	render() {
// 		return (
// 			<>
// 				<label
// 					className={styles["input-group"]}
// 					htmlFor={this.props.labelname}
// 				>
// 					{this.props.labelname}
// 					<textarea
// 						{...this.props}
// 						id={this.props.labelname}
// 						required
// 					></textarea>
// 				</label>
// 				{this.props.value.length === chrLimit ? (
// 					<p style={{ color: "red" }}>
// 						Превышен лимит символов в поле
// 					</p>
// 				) : (
// 					<p>
// 						Осталось {chrLimit - this.props.value.length} символов
// 						из {chrLimit}
// 					</p>
// 				)}
// 			</>
// 		);
// 	}
// }

export default Textarea;
