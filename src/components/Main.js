import React, { Component } from 'react';
import './Main.css';

export default class Main extends Component {
    state = {
      newTask: '',
    };

    hendleChange = (e) => {
      this.setState({
        newTask: e.target.value,
      });
    }

    render() {
      const { newTask } = this.state;
      return (
        <div className="main">
          <h1>Lista de tarefas</h1>

          <form action="#">
            <input onChange={this.hendleChange} type="text" />
            <button type="submit">Enviar</button>

          </form>
        </div>
      );
    }
}