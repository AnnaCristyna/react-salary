import React, { Component } from 'react';
import InputFullSalary from './components/inputFullSalary/inputFullSalary';
import InputReadOnly from './components/InputReadOnly/InputReadOnly';
import ProgressBarSalary from './components/ProgressBarSalary/ProgressBarSalary';
import { calculateSalaryFrom } from './Helpers/salary';
import Css from './app.module.css';

//cd Desktop\Bootcamp_Full_Stack\Modulo3\

export default class App extends Component {
  constructor() {
    super();
    const discounts = calculateSalaryFrom(0);
    this.state = {
      grossWage: '',
      discounts,
      rates: { INSS: 0, IRPF: 0, netWage: 100 },
    };
  }
  handleChangeSalary = (newText) => {
    const discounts = calculateSalaryFrom(newText);
    const rateDiscountINSS = (discounts.discountINSS * 100) / newText;
    const rateDiscountIRPF = (discounts.discountIRPF * 100) / newText;
    const rateNetWage = 100 - rateDiscountINSS - rateDiscountIRPF;
    const rates = {
      INSS: rateDiscountINSS,
      IRPF: rateDiscountIRPF,
      netWage: rateNetWage,
    };

    this.setState({
      grossWage: newText,
      discounts,
      rates,
    });
  };

  render() {
    const { grossWage, discounts, rates } = this.state;

    return (
      <div style={{ margin: '50px' }}>
        <InputFullSalary
          grossWage={grossWage}
          onChangeSalary={this.handleChangeSalary}
        />
        <InputReadOnly discounts={discounts} rates={rates} />
        <div className={Css.flexbar}>
          <ProgressBarSalary value={rates.INSS} color="#e67e22" />
          <ProgressBarSalary value={rates.IRPF} color="#c0392b" />
          <ProgressBarSalary value={rates.netWage} color="#16a085" />
        </div>
      </div>
    );
  }
}
