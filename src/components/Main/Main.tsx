import { products } from '../../data/products';
import React from 'react';
import { IState } from './IMain';

class Main extends React.Component {
  state: IState = {
    arrCard: products,
    input: localStorage.getItem('input_text'),
    filterArray: products,
  };

  handleInputValue(e: string) {
    this.setState({ input: e });
  }

  componentWillUnmount() {
    localStorage.setItem('input_text', `${this.state.input}`);
  }

  render() {
    return (
      <main className="container main__container">
        <div className="input__container">
          <input
            type="text"
            value={this.state.input === null ? '' : this.state.input}
            onChange={(e) => this.handleInputValue(e.target.value)}
          />
          <h1>{this.state.input}</h1>
        </div>
        <div className="cards__container">
          {this.state.filterArray.map((e) => (
            <div key={e.id}>{e.title}</div>
          ))}
        </div>
      </main>
    );
  }
}

export default Main;
