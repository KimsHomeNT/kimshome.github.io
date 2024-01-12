import React from 'react'
import './Features.css';

function Features() {
  return (
    <>
      <div className='feature-wrapper'>
        <h1>Why Kim's Home</h1>
        <div className='each-feature-wrapper'>
            <div className='Card right-pad'>
              Strategic Location
            </div>

            <div className='Card right-pad'>
              Large Area
            </div>

            <div className='Card'>
              Equipped With Facilities
            </div>

        </div>
      </div>
    </>
  )
}

export default Features;