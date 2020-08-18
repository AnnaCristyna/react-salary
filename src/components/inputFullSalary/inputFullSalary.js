import React, { Component } from 'react';
import css from './inputFullSalary.module.css';

export default class inputFullSalary extends Component {
  handleChangeInput = (event) => {
    const newText = event.target.value;
    this.props.onChangeSalary(newText);
  };
  render() {
    const { grossWage } = this.props;

    return (
      <div>
        <label>
          {' '}
          Salário bruto:
          <input
            className={css.text}
            type="number"
            name="Salário bruto"
            value={grossWage}
            onChange={this.handleChangeInput}
            placeholder="Insira seu salário"
          />
        </label>
      </div>
    );
  }
}
