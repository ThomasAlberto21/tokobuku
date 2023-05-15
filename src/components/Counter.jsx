import React from 'react';
import { connect } from 'react-redux';

class Counter extends React.Component {
  // handleCounterChange = (newValue) => {
  //   this.props.onCounterChange(newValue);
  // };

  // plusButton = () => {
  //   this.setState(
  //     {
  //       order: this.state.order + 1,
  //     },
  //     () => {
  //       this.handleCounterChange(this.state.order);
  //     }
  //   );
  // };

  // minusButton = () => {
  //   if (this.state.order > 0) {
  //     this.setState(
  //       {
  //         order: this.state.order - 1,
  //       },
  //       () => {
  //         this.handleCounterChange(this.state.order);
  //       }
  //     );
  //   }
  // };

  render() {
    console.log(this.props);
    return (
      <>
        <div className='mt-3 flex'>
          <p className='me-2'>Quantity</p>
          <button className='border px-5' onClick={this.props.minusButton}>
            -
          </button>
          <input
            type='text'
            className='text-center border w-12'
            value={this.props.order}
          />
          <button className=' border px-5' onClick={this.props.plusButton}>
            +
          </button>
        </div>
        <button className='px-20 py-2 my-6 rounded-lg bg-black text-white font-semibold'>
          Add To Cart
        </button>
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    order: state.totalOrder,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    handlePlus: () => dispatch({ type: 'PLUS_ORDER' }),
    handleMinus: () => dispatch({ type: 'MINUS_ORDER' }),
  };
};

export default connect(mapStateToProps)(Counter);
