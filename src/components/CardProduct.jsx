import React from 'react';
import Counter from './Counter';

class CardProduct extends React.Component {
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
        </div>
        <Counter />
      </div>
    );
  }
}

export default CardProduct;
