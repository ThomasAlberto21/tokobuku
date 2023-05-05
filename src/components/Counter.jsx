import React from 'react';

class Counter extends React.Component {
  state = {
    order: 1,
  };

  handleCounterChange = (newValue) => {
    this.props.onCounterChange(newValue);
  };

  plusButton = () => {
    this.setState(
      {
        order: this.state.order + 1,
      },
      () => {
        this.handleCounterChange(this.state.order);
      }
    );
  };

  minusButton = () => {
    if (this.state.order > 0) {
      this.setState(
        {
          order: this.state.order - 1,
        },
        () => {
          this.handleCounterChange(this.state.order);
        }
      );
    }
  };

  render() {
    return (
      <div className='mt-3 flex'>
        <p className='me-2'>Quantity</p>
        <button className='border px-5' onClick={this.minusButton}>
          -
        </button>
        <input
          type='text'
          className='text-center border w-12'
          value={this.state.order}
        />
        <button className=' border px-5' onClick={this.plusButton}>
          +
        </button>
      </div>
    );
  }
}

export default Counter;
