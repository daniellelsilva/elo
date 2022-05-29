import React from 'react';

import '../style/components/home.scss';
import Header from './Header';

export default function Home() {
  return (
    <div className="home">
      <Header />
      <div className='home-text'>
        <p className='home-text-1'>Elo</p>
        <p className='home-text-2'>a new way to be green</p>
      </div>
    </div>
  )
}
