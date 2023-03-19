import { products } from '../../data/products';
import React from 'react';
import { IState } from './IMain';
import ProductsCards from './ProductsCards/ProductsCards';
import './Main.scss';

class Main extends React.Component {
  state: IState = {
    arrCard: products,
    input: localStorage.getItem('input_text') || '',
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
          <form>
            <input
              className="input__search"
              id="input"
              type="text"
              placeholder="Search"
              value={this.state.input === null ? '' : this.state.input}
              onChange={(e) => this.handleInputValue(e.target.value)}
            />
          </form>

          <h3>Count: {this.state.filterArray.length}</h3>
        </div>
        <div className="cards__container">
          {this.state.filterArray.map((element) => (
            <ProductsCards key={element.id} {...element} />
          ))}
        </div>
      </main>
    );
  }
}

export default Main;
