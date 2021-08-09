import React, { Component } from 'react';

// form
import { FaPlus } from 'react-icons/fa';
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
      </div>
    );
  }
}
