import React from 'react';
import { connect } from 'react-redux';
import CardProduct from '../components/CardProduct';

class Product extends React.Component {
  state = {
    order: 1,
  };

  handleCounterChange = (newValue) => {
    this.setState({
      order: newValue,
    });
  };

  render() {
    return (
      <>
        <div className='header flex justify-end'>
          <div className='troley flex content-center mt-10'>
            <img
              src='https://www.freeiconspng.com/uploads/basket-cart-icon-27.png'
              alt='basket cart icon'
              className='w-6 h-6'
            />
            <div className='count bg-blue-800 rounded-full w-6 h-6 text-white text-center center grid content-center text-sm'>
              {this.props.order}
            </div>
          </div>
        </div>
        <CardProduct
          onCounterChange={(newValue) => this.handleCounterChange(newValue)}
        />
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    order: state.totalOrder,
  };
};

export default connect(mapStateToProps)(Product);
