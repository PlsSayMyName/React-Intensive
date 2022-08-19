import React, { useState } from 'react';
import './App.css';
import Button from './components/Button/Button';
import CompletedForm from './components/CompletedForm/CompletedForm';
import Input from './components/Input/Input';
import Popup from './components/Popup/Popup';
import Textarea from './components/Textarea/Textarea';

const initValues = {
  name: '',
  lastName: '',
  date: '',
  tel: '',
  site: '',
  about: '',
  tech: '',
  desc: '',
  errors: {},
  formIsValid: false,
}

function App() {
  const [state, setState] = useState(initValues);
  const [isShowUp, setIsShowPopup] = useState(false);

  function handleValidation() {
    let errors = {};
    let formIsValid = true;
    console.log(state);

    // Name
    if (!state.name) {
      formIsValid = false;
      errors.name = "Поле не может быть пустым";
    }
    if (!state.name.match(/^([а-яё]+|[a-z]+)$/i)) {
      formIsValid = false;
      errors.name = "Поле должно содержать только кириллические или латинские буквы";
    }
    if (state.name.charAt(0) !== state.name.charAt(0).toUpperCase()) {
      formIsValid = false;
      errors.name = "Первый символ должен быть с большой буквы";
    }

    // LastName
    if (!state.lastName) {
      formIsValid = false;
      errors.lastName = "Поле не может быть пустым";
    }
    if (!state.lastName.match(/^([а-яё]+|[a-z]+)$/i)) {
      formIsValid = false;
      errors.lastName = "Поле должно содержать только кириллические или латинские буквы";
    }
    if (state.lastName.charAt(0) !== state.lastName.charAt(0).toUpperCase()) {
      formIsValid = false;
      errors.lastName = "Первый символ должен быть с большой буквы";
    }

    // Phone
    if (!state.tel) {
      formIsValid = false;
      errors.tel = "Поле не может быть пустым";
    }
    if (state.tel.length !== 13) {
      formIsValid = false;
      errors.tel = "Введите корректный номер телефона";
    }

    // Website
    if (!state.site) {
      formIsValid = false;
      errors.site = "Поле не может быть пустым";
    }
    if (!state.site.match(/https:\/\//)) {
      formIsValid = false;
      errors.site = "Название сайта должно начинаться с https://";
    }
    setState({ ...state, errors: errors });
    return formIsValid;
  }
  // Phone field
  function phoneMask(e) {
    const value = e.target.value.replace(/\D/g, '');
    const numberLength = 9;
    let result = "+";
    for (let i = 0; i < value.length && i < numberLength; i++) {
      switch (i) {
        case 1:
        case 5:
        case 7:
          result += "-";
          break;
        default:
          break;
      }
      result += value[i];
    }
    console.log(result);
    setState({
      ...state,
      tel: result,
    })
  }

  const onChangeField = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    })
  }

  const resetForm = () => {
    return setState(initValues);
  }

  const submitForm = (e) => {
    if (e && e.preventDefault) { e.preventDefault(); }
    if (handleValidation()) {
      setState({
        ...state,
        formIsValid: true,
      });
      setIsShowPopup(true);
    } else {
      alert("В форме присутствуют ошибки. Пожалуйста, исправьте их и попробуйте снова");
    }
  }
  return (
    <section className='app'>
      <div className="bg-img"></div>
      <div className="wrapper">
        <div className="form-container">
          <div className="left">
            <h1>Создание анкеты</h1>
          </div>
          <div className="right">
            <form onSubmit={submitForm}>
              {!state.formIsValid
                ?
                <>
                  <Input error={state.errors.name} type="text" labelname="Имя" name="name" value={state.name} onChange={onChangeField} />
                  <Input error={state.errors.lastName} type="text" labelname="Фамилия" name="lastName" value={state.lastName} onChange={onChangeField} />
                  <Input error={state.errors.date} type="date" labelname="Дата рождения" name="date" value={state.date} onChange={onChangeField} />
                  <Input error={state.errors.tel} type="tel" labelname="Телефон" name="tel" value={state.tel} onChange={phoneMask} />
                  <Input error={state.errors.site} type="text" labelname="Сайт" name="site" value={state.site} onChange={onChangeField} />
                  <Textarea labelname="О себе" name="about" value={state.about} onChange={onChangeField} />
                  <Textarea labelname="Стек технологий" name="tech" value={state.tech} onChange={onChangeField} />
                  <Textarea labelname="Описание последнего проекта" name="desc" value={state.desc} onChange={onChangeField} />
                  <div className="button-box">
                    <Button type="submit" name="Сохранить" />
                    <Button type="reset" onClick={resetForm} name="Отмена" />
                  </div>
                </>
                :
                <CompletedForm state={state} />
              }
            </form>
          </div>
        </div>
      </div>
      <Popup isShowUp={isShowUp} setIsShowPopup={setIsShowPopup} />
    </section>
  )
}

export default App;
