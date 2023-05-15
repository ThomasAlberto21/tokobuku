import React from 'react';
import { connect } from 'react-redux';

class Counter extends React.Component {
  render() {
    return (
      <>
        <div className='mt-3 flex'>
          <p className='me-2'>Quantity</p>
          <button
            className='border px-5 hover:bg-black hover:text-white'
            onClick={this.props.minusButton}
          >
            -
          </button>
          <input
            type='text'
            className='text-center border w-12 '
            value={this.props.order}
          />
          <button
            className=' border px-5 hover:bg-black hover:text-white'
            onClick={this.props.plusButton}
          >
            +
          </button>
        </div>
        <button className='w-full py-3 my-6 rounded-lg border border-1 border-black text-black font-semibold hover:bg-black hover:text-white'>
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
    plusButton: () => dispatch({ type: 'PLUS_ORDER' }),
    minusButton: () => dispatch({ type: 'MINUS_ORDER' }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
