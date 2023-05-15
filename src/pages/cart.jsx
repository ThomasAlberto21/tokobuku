import React from 'react';
import { connect } from 'react-redux';

class Cart extends React.Component {
  state = {
    price: 20000,
  };

  render() {
    const total = this.state.price * this.props.order;

    return (
      <div className='mt-20 mx-10'>
        <h1 className='font-normal text-6xl'>Your Cart</h1>
        <div className='mt-5'>
          <img
            src='https://storage.googleapis.com/narasi-production.appspot.com/production/medium/1671785416672/5-rekomendasi-buku-pengembangan-diri-yang-wajib-dibaca-medium.webp'
            alt='sofa'
            className='rounded-lg '
          />
          <h1 className='font-normal text-2xl mt-10'>Buku Self Improvment</h1>
          <p>Quantity : {this.props.order}</p>
          <p>Harga : {this.state.price}</p>
          <p className='mt-10 font-semibold text-2xl'>Total Harga Rp.{total}</p>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    order: state.totalOrder,
  };
};

export default connect(mapStateToProps)(Cart);
