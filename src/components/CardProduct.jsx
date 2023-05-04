import React from 'react';

class CardProduct extends React.Component {
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
      <div className='lg:flex mt-10'>
        <div className='me-3 '>
          <img
            src='https://storage.googleapis.com/narasi-production.appspot.com/production/medium/1671785416672/5-rekomendasi-buku-pengembangan-diri-yang-wajib-dibaca-medium.webp'
            alt='sofa'
            className='rounded-lg'
          />
        </div>
        <div className='mt-10'>
          <h1 className='font-bold text-5xl'>Buku Self Improvment</h1>
          <p className='font-normal mt-2'>Rp.20.000</p>
          <p className='mt-5'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt
            asperiores aliquam est dolores repudiandae suscipit provident?
            Distinctio aliquam tempora voluptate.
          </p>
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
        </div>
      </div>
    );
  }
}

export default CardProduct;
