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
          <div className='about-mission-card about-mission-card-1'>
            <h2>Solar System</h2>
            <p>Donec a tempor turpis. Mauris pellentesque pulvinar ipsum quis bibendum. Praesent sit amet ligula et felis commodo consequat sit amet eget orci.</p>
          </div>

          <div className='about-mission-card about-mission-card-2'>
            <h2>Clean Energy</h2>
            <p>Nulla bibendum quis nulla sed laoreet. Curabitur pretium mi orci, non faucibus diam iaculis eget. Interdum et malesuada fames ac ante ipsum primis in faucibus.</p>
          </div>

          <div className='about-mission-card about-mission-card-3'>
            <h2>Low Carbon Transition</h2>
            <p>Aenean dapibus interdum ornare. Donec egestas mauris non ex lobortis, in malesuada tellus pulvinar.</p>
          </div>

          <div className='about-mission-card about-mission-card-4'>
            <h2>Recycling</h2>
            <p>Duis mollis porttitor porttitor. Integer est sapien, iaculis sed purus rhoncus, commodo ultrices dolor. </p>
          </div>

          <div className='about-mission-card about-mission-card-5'>
            <h2>Sanitation</h2>
            <p>Vivamus ut lectus aliquam eros iaculis feugiat sed semper eros. Integer eget bibendum tortor. Sed vulputate lacus ac orci finibus auctor. </p>
          </div>

          <div className='about-mission-card about-mission-card-6'>
            <h2>Corporate Sustainability</h2>
            <p>Quisque tempus nisl tempus tortor elementum congue. Donec sed pellentesque nulla. </p>
          </div>
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
