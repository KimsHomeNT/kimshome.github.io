import React, { useState } from 'react';
import './Footer.css';
import { Button } from '../Button/Button';
import { Link  } from 'react-router-dom';



function Footer() {
  const [message, setMessage] = useState('');

  const handleInputChange = (e) => {
    setMessage(e.target.value);
  };

  return (
    <div id='contact-us' className='footer-container'>
      <section className='footer-subscription'>
        <h1 className='footer-subscription-heading'>
          Any Enquiry?
        </h1>
        <p className='footer-subscription-text'>
          Welcome To Drop a Message To Our Official WhatsApp
        </p>
        <div className='input-areas'>
          <input
            className='footer-input'
            name='message'
            type='message'
            placeholder='Your Message'
            onChange={handleInputChange}
          />
        </div>
        <Link className='whatsapp-link' to={`https://wa.me/+601120797329?text=${encodeURIComponent(message + '(From Website)')}`}>
              <button class='whatsapp-button'>
                <img class= 'whatsapp-logo' src={process.env.PUBLIC_URL + '/icons/whatsapp.png'}/>WhatsApp Us
              </button>
        </Link>
      </section>

      <section class='social-media'>
        <div class='social-media-wrap'>
          <div class='footer-logo'>
            <Link to='/' className='social-logo'>
              Kim's Home
              <img className='kims-home-small-logo' src='/icons/white-kh-logo.png'/>
            </Link>
          </div>
          <small class='website-rights'>Kim's Home © 2024</small>
          <div class='social-icons'>

            <Link
              class='social-icon-link facebook'
              to='https://www.facebook.com/p/KIMS-HOME-100084184984393/'
              target='_blank'
              aria-label='Facebook'
            >
              <i class='fab fa-facebook-f' />
            </Link>
            <Link
              class='social-icon-link instagram'
              to='https://www.instagram.com/kimshome_nibongtebal/'
              target='_blank'
              aria-label='Instagram'
            >
              <i class='fab fa-instagram' />
            </Link>
            <Link
              class='social-icon-link airbnb'
              to='http://www.airbnb.com/rooms/691715553574322084'
              target='_blank'
              aria-label='Airbnb'
            >
              <i class="fa-brands fa-airbnb"></i>
            </Link>
            <Link
              class='footer-small-logo'
              to='https://www.agoda.com/kim-s-home-homey-at-your-stay/hotel/penang-my.html'
              target='_blank'
              aria-label='Agoda'
            >
              <img className='footer-small-logo' src='/icons/agoda.svg'/>
            </Link>
            <Link
              class='social-icon-link twitter'
              to='https://www.booking.com/hotel/my/kims-home-homey-at-your-stay.html'
              target='_blank'
              aria-label='Booking.com'
            >
              <img className='footer-small-logo' src='/icons/booking.svg'/>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;