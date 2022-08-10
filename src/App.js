import React from 'react';
import './App.css';
import Button from './components/Button/Button';
import Input from './components/Input/Input';
import Textarea from './components/Textarea/Textarea';

class App extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <section className='app'>
        <div className="bg-img"></div>
        <div className="wrapper">
          <div className="form-container">
            <div className="left">
              <h1>Создание анкеты</h1>
            </div>
            <div className="right">
              <form>
                <Input type="text" name="Имя" />
                <Input type="text" name="Фамилия" />
                <Input type="date" name="Дата рождения"/>
                <Input type="tel" name="Телефон"/>
                <Input type="text" name="Сайт"/>
                <Textarea type="date" name="О себе"/>
                <Textarea type="date" name="Стек технологий"/>
                <Textarea type="date" name="Описание последнего проекта"/>
                <div className="button-box">
                  <Button type="submit" name="Сохранить" />
                  <Button type="reset" name="Отмена"/>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    )
  }
}

export default App;
