import React from 'react';
import Header from './Header';

import '../style/components/about.scss';

export default function About() {
  return (
    <div className='about'>
      <Header />
      <div className='about about-company'>
        <div className='about-text'>
        <h1 className='heading-1'>Who we are</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In in neque id dui euismod blandit. Phasellus ultricies sollicitudin cursus. Nulla facilisi. Etiam ut dolor neque. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Interdum et malesuada fames ac ante ipsum primis in faucibus. Phasellus consequat at leo in eleifend. Donec elit dui, molestie ac ornare id, volutpat sit amet est. Nunc dictum in nibh ac interdum. Phasellus non gravida odio.</p>
        </div>
      </div>
      
      <div className='about about-mission'>
        <h1 className='heading-1'>Our mission</h1>
        <p>Helping you to be green</p>
        <div className='about-mission-cards'>
          <p>teste</p>
        </div>
          
      </div>

      <div className='about-team'>
        <div className='about-text'>
          <h1 className='heading-1'>Our team</h1>

        </div>
      </div>
    </div>
  )
}
