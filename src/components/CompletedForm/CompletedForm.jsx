import React from "react";

const CompletedForm = (props) => {
	return (
		<>
			<div className="personalForm">
				<p>Имя: {props.state.name}</p>
				<p>Фамилия: {props.state.lastName}</p>
				<p>Дата рождения: {props.state.date}</p>
				<p>Телефон: {props.state.tel}</p>
				<p>Сайт: {props.state.site}</p>
				<p>О себе: {props.state.about}</p>
				<p>Стек технологий: {props.state.tech}</p>
				<p>Описание последнего проекта: {props.state.desc}</p>
			</div>
		</>
	);
};

export default CompletedForm;
