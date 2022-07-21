import React from 'react';
import Header from './Header';

import '../style/components/services.scss';

export default function Services() {
  return (
    <div className='service-page'>
      <Header />
      <div className='services'>
        <h1 className='heading-1'>Our mission</h1>
        <p>Helping you to be green</p>
        <div className='services-cards'>
          <div className='services-card services-card-1'>
            <h2>Solar System</h2>
            <p>Donec a tempor turpis. Mauris pellentesque pulvinar ipsum quis bibendum. Praesent sit amet ligula et felis commodo consequat sit amet eget orci.</p>
          </div>

          <div className='services-card services-card-2'>
            <h2>Clean Energy</h2>
            <p>Nulla bibendum quis nulla sed laoreet. Curabitur pretium mi orci, non faucibus diam iaculis eget. Interdum et malesuada fames ac ante ipsum primis in faucibus.</p>
          </div>

          <div className='services-card services-card-3'>
            <h2>Low Carbon Transition</h2>
            <p>Aenean dapibus interdum ornare. Donec egestas mauris non ex lobortis, in malesuada tellus pulvinar.</p>
          </div>

          <div className='services-card services-card-4'>
            <h2>Recycling</h2>
            <p>Duis mollis porttitor porttitor. Integer est sapien, iaculis sed purus rhoncus, commodo ultrices dolor. </p>
          </div>

          <div className='services-card services-card-5'>
            <h2>Sanitation</h2>
            <p>Vivamus ut lectus aliquam eros iaculis feugiat sed semper eros. Integer eget bibendum tortor. Sed vulputate lacus ac orci finibus auctor. </p>
          </div>

          <div className='services-card services-card-6'>
            <h2>Corporate Sustainability</h2>
            <p>Quisque tempus nisl tempus tortor elementum congue. Donec sed pellentesque nulla. </p>
          </div>
        </div>
          
      </div>
    </div>
  )
}