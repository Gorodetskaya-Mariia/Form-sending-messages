import React from "react";
import "./Form.css";
import Title from "../Title/Title.js";

class Form extends React.Component {
	render(){
		return (
			<div className="form">
				<Title titleClass="form__title" titleText="Отправлялка сообщений"></Title>
				<div className="form__field form__field--width-100 form__field--theme">
					<label className="form__label">Тема письма</label>
					<input className="form__input"></input>
				</div>
				<div className="form__field form__field--width-100 form__field--mess">
					<label className="form__label">Сообщение</label>
					<textarea className="form__textarea"></textarea>
				</div>
				<div className="form__field form__field--file">
					<label className="form__label form__label--file" for="file">Прикрепить файл</label>
					<input type="file" name="file" id="file" className="visually-hidden"></input>
					<img src="clip.svg" className="form__icon-clip"></img>
				</div>	
			</div>
		)
	}
}

export default Form;