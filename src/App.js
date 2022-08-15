import React from 'react';
import './App.css';
import Button from './components/Button/Button';
import Input from './components/Input/Input';
import Textarea from './components/Textarea/Textarea';

class App extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      fields: { name: '', lastName: '', date: '', tel: '', site: '', about: '', tech: '', desc: '' },
      errors: {},
      formIsValid: false,
      chrLimit: 600,
      chrLeft: 600,
    };
  }

  handleValidation() {
    let fields = this.state.fields;
    let errors = {};
    let formIsValid = true;

    // Name
    if (!fields["name"]) {
      formIsValid = false;
      errors["name"] = "Поле не может быть пустым";
    }

    if (typeof fields["name"] !== "undefined") {
      if (!fields["name"].match(/^([а-яё]+|[a-z]+)$/i)) {
        formIsValid = false;
        errors["name"] = "Поле должно содержать только кириллические или латинские буквы";
      }
      if (fields["name"].charAt(0) !== fields["name"].charAt(0).toUpperCase()) {
        formIsValid = false;
        errors["name"] = "Первый символ должен быть с большой буквы";
      }
    }

    // LastName
    if (!fields["lastName"]) {
      formIsValid = false;
      errors["lastName"] = "Поле не может быть пустым";
    }

    if (typeof fields["lastName"] !== "undefined") {
      if (!fields["lastName"].match(/^([а-яё]+|[a-z]+)$/i)) {
        formIsValid = false;
        errors["lastName"] = "Поле должно содержать только кириллические или латинские буквы";
      }
      if (fields["lastName"].charAt(0) !== fields["lastName"].charAt(0).toUpperCase()) {
        formIsValid = false;
        errors["lastName"] = "Первый символ должен быть с большой буквы";
      }
    }

    // Phone
    if (!fields["tel"]) {
      formIsValid = false;
      errors["tel"] = "Поле не может быть пустым";
    }

    if (typeof fields["tel"] !== "undefined") {
      if (fields["tel"].length !== 13) {
        formIsValid = false;
        errors["tel"] = "Введите корректный номер телефона";
      }
    }

    // Website
    if (!fields["site"]) {
      formIsValid = false;
      errors["site"] = "Поле не может быть пустым";
    }

    if (typeof fields["site"] !== "undefined") {
      if (!fields["site"].match(/https:\/\//)) {
        formIsValid = false;
        errors["site"] = "Название сайта должно начинаться с https://";
      }
    }

    this.setState({ errors: errors });
    // console.log(Object.keys(this.state.errors));
    console.log(formIsValid);
    return formIsValid;
  }

  // Phone field
  phoneMask(field, e) {
    const value = e.target.value.replace(/\D/g, '');
    const numberLength = 9;
    let result = "+";
    for (let i = 0; i < value.length && i < numberLength; i++) {
      switch (i) {
        case 1:
          result += "-";
          break;
        case 5:
          result += "-";
          break;
        case 7:
          result += "-";
          break;
        default:
          break;
      }
      result += value[i];
    }
    e.target.value = result;
    let fields = this.state.fields;
    fields[field] = result;
    this.setState({fields});
  }

  // Textarea
  textareaLimit(field, e){
    const charCount = e.target.value.length;
    const maxChar = this.state.chrLimit;
    if(e.target.value.length > maxChar) return;
    const charLength = maxChar - charCount;
    let fields = this.state.fields;
    fields[field] = e.target.value;
    this.setState({fields});
    this.setState((prev) => {return{chrLeft: charLength} });
}

  onChangeField(field, e) {
    let fields = this.state.fields;
    fields[field] = e.target.value;
    this.setState({fields});
  }

  submitForm(e) {
    e.preventDefault();
    // let fields = this.state.fields;
    console.log(this.state.formIsValid);
    if (this.handleValidation()) {
      console.log('123');
      this.setState({formIsValid: true})
    } else {
      alert("В форме присутствуют ошибки. Пожалуйста, исправьте их и попробуйте снова");
    }
  }

  render() {
    const { name, lastName, date, tel, site, about, tech, desc } = this.state.fields;

    return (
      <section className='app'>
        <div className="bg-img"></div>
        <div className="wrapper">
          <div className="form-container">
            <div className="left">
              <h1>Создание анкеты</h1>
            </div>
            <div className="right">
              <form onSubmit={this.submitForm.bind(this)}>
                {!this.state.formIsValid
                ?
                <>
                <Input type="text" name="Имя" value={name} onChange={this.onChangeField.bind(this, "name")} />
                <span style={{ color: "red" }}>{this.state.errors["name"]}</span>
                <Input type="text" name="Фамилия" value={lastName} onChange={this.onChangeField.bind(this, "lastName")} />
                <span style={{ color: "red" }}>{this.state.errors["lastName"]}</span>
                <Input type="date" name="Дата рождения" value={date} onChange={this.onChangeField.bind(this, "date")} />
                <Input type="tel" name="Телефон" value={tel} onChange={this.phoneMask.bind(this, "tel")} />
                <span style={{ color: "red" }}>{this.state.errors["tel"]}</span>
                <Input type="text" name="Сайт" value={site} onChange={this.onChangeField.bind(this, "site")} />
                <span style={{ color: "red" }}>{this.state.errors["site"]}</span>
                <Textarea name="О себе" value={about} onChange={this.textareaLimit.bind(this, "about")}/>
                {about.length === this.state.chrLimit ? <p style={{color: "red"}}>Превышен лимит символов в поле</p>
                :
                <p>Осталось {this.state.chrLeft} символов  из {this.state.chrLimit}</p>
                }
                <Textarea name="Стек технологий" value={tech} onChange={this.textareaLimit.bind(this, "tech")} />
                {tech.length === this.state.chrLimit ? <p style={{color: "red"}}>Превышен лимит символов в поле</p>
                :
                <p>Осталось {this.state.chrLeft} символов  из {this.state.chrLimit}</p>
                }
                <Textarea name="Описание последнего проекта" value={desc} onChange={this.textareaLimit.bind(this, "desc")} />
                {desc.length === this.state.chrLimit ? <p style={{color: "red"}}>Превышен лимит символов в поле</p>
                :
                <p>Осталось {this.state.chrLeft} символов  из {this.state.chrLimit}</p>
                }
                <div className="button-box">
                  <Button type="submit" name="Сохранить" />
                  <Button type="reset" name="Отмена"/>
                </div>
                </>
                :
                <div className='personalForm'>
                  <p>Имя: {name}</p>
                  <p>Фамилия: {lastName}</p>
                  <p>Дата рождения: {date}</p>
                  <p>Телефон: {name}</p>
                  <p>Сайт: {site}</p>
                  <p>О себе: {about}</p>
                  <p>Стек технологий: {tech}</p>
                  <p>Описание последнего проекта: {desc}</p>
                </div>
                }
              </form>
            </div>
          </div>
        </div>
      </section>
    )
  }
}

export default App;
