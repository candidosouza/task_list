import React, { Component } from 'react';

// form
import { FaPlus, FaEdit, FaWindowClose } from 'react-icons/fa';

// tarefas
// import { FaEdit } from 'react-icons/fa';

import './Main.css';

export default class Main extends Component {
  state = {
    newTask: '',
    tasks: [
      'Fazer café',
      'Beber água',
      'Estudar',
    ],
  };

  hendleChange = (e) => {
    this.setState({
      newTask: e.target.value,
    });
  }

  render() {
    const { newTask, tasks } = this.state;
    return (
      <div className="main">
        <h1>Lista de tarefas</h1>

        <form action="#" className="form">
          <input
            onChange={this.hendleChange}
            type="text"
            value={newTask}
          />
          <button type="submit">
            <FaPlus />
          </button>
        </form>

        <ul className="tasks">
          { tasks.map((task) => (
            <li key={task}>
              { task }
              <div className="actions">
                <FaEdit className="actionEdit" />
                <FaWindowClose className="actionDelete" />
              </div>
            </li>
          )) }
        </ul>

      </div>
    );
  }
}
