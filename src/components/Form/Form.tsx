import React from 'react';

interface ITest {
  cardArray: string[];
}

class Form extends React.Component {
  state: ITest = {
    cardArray: ['test'],
  };
  formRef: React.RefObject<HTMLFormElement> = React.createRef();
  componentDidMount() {
    console.log(this.formRef);
  }
  render(): React.ReactNode {
    return (
      <section className="form container">
        <div className="form__container">
          <form ref={this.formRef}></form>
        </div>
        <div className="form-cards__container">
          {this.state.cardArray.map((elem, index) => (
            <h1 key={index}>{elem}</h1>
          ))}
        </div>
      </section>
    );
  }
}

export default Form;
