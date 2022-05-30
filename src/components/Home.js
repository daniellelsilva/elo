import React from 'react';
import Header from './Header';

import '../style/components/home.scss';

export default function Home() {
  return (
    <div className="home">
      <Header />
      <div className='home-text'>
        <p className='home-text-1'>Elo</p>
        <p className='home-text-2'>a new way to be green</p>
        <button type='button' className='home-btn'>
          Learn more
        </button>
      </div>
    </div>
  )
}
