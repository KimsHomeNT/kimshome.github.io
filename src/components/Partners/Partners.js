import React from 'react'
import { Link } from 'react-router-dom'
import './Partners.css';

function Partners() {
  return (
    <>
        <div className='partner-div-wrapper'>
            <h1>Our Partners</h1>
            <div className='partners-wrapper'>
            <Link
                class='long-logo-wrapper'
                to='http://www.airbnb.com/rooms/691715553574322084'
                target='_blank'
                aria-label='Airbnb'
                >
                <img className='long-logo' src='/icons/airbnb-long.svg'/>
                </Link>
                <Link
                class='long-logo-wrapper'
                to='https://www.agoda.com/kim-s-home-homey-at-your-stay/hotel/penang-my.html'
                target='_blank'
                aria-label='Agoda'
                >
                <img className='long-logo' src='/icons/agoda-long.svg'/>
                </Link>
                <Link
                class='long-logo-wrapper'
                to='https://www.booking.com/hotel/my/kims-home-homey-at-your-stay.html'
                target='_blank'
                aria-label='Booking.com'
                >
                <img className='long-logo' src='/icons/booking-long.svg'/>
                </Link>
            </div>
        </div>
    </>
  )
}

export default Partners;