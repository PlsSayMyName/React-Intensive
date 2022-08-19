import React from "react";
import ReactDom from "react-dom";
import styles from "./Popup.module.css";

const Template = ({ closePopup }) => {
	return (
		<div onClick={closePopup} className={styles["window-background"]}>
			<div
				onClick={(e) => {
					e.stopPropagation();
				}}
				className={styles["window-body"]}
			>
				<h2>
					Данные успешно внесены. Закройте окно, чтобы увидеть их.
				</h2>
				<button
					type="button"
					onClick={closePopup}
					className={styles.close}
				></button>
			</div>
		</div>
	);
};

const Popup = ({ isShowUp, setIsShowPopup }) => {
	const closePopup = () => {
		setIsShowPopup(false);
	};
	const domNode = document.getElementById("popup");
	if (domNode && isShowUp) {
		return ReactDom.createPortal(
			<>
				<Template closePopup={closePopup} />
			</>,
			domNode
		);
	}
	return <div>Popup</div>;
};

export default Popup;
