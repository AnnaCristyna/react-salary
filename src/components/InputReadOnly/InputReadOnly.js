import React, { Component } from 'react';
import css from './inputReadOnly.module.css';

export default class InputReadOnly extends Component {
  render() {
    const { discounts, rates } = this.props;
    const {
      baseINSS,
      discountINSS,
      baseIRPF,
      discountIRPF,
      netSalary,
    } = discounts;
    const { INSS, IRPF, netWage } = rates;
    return (
      <div>
        <label>
          Base INSS:
          <input type="text" value={baseINSS} name="baseINSS" disabled />
        </label>

        <label>
          Desconto INSS:
          <input
            type="text"
            value={` ${discountINSS}  (${INSS}%)`}
            name="discountINSS"
            disabled
          />
        </label>

        <label>
          Base IRPF:
          <input type="text" value={baseIRPF} name="baseIRPF" disabled />
        </label>

        <label>
          Desconto IRPF:
          <input
            type="text"
            value={` ${discountIRPF}  (${IRPF}%)`}
            name="discountIRPF"
            disabled
          />
        </label>
        <label>
          Salário Líquido:
          <input
            type="text"
            value={` ${netSalary}  (${netWage}%)`}
            name="{netSalary}"
            disabled
          />
        </label>
      </div>
    );
  }
}
