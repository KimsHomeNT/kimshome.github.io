import React, { useState } from 'react';
import './Footer.css';
import './Location.css';
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
          Welcome To Message Us On Our Official WhatsApp
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

      <div className='google-map-div'>
            <h1>Our Location</h1>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3973.536752574561!2d100.46813577498246!3d5.177939594799509!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x304ab1988a04e21d%3A0xcd6a594a7551c41f!2zS2ltJ3MgSG9tZSDnkLTkuYvlrrYgTmlib25nIFRlYmFsIEhvbWVzdGF5IOmrmOa4iuawkeWuvw!5e0!3m2!1sen!2smy!4v1705071156302!5m2!1sen!2smy" width="600" height="450" style={{border:0}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
      </div>

      <section class='social-media'>
        <div class='social-media-wrap'>
          <div class='footer-logo'>
            <Link to='/' className='social-logo'>
              Kim's Home
              <img className='kims-home-small-logo' src='/icons/white-kh-logo.png'/>
            </Link>
          </div>
          <p class='website-rights'>Kim's Home © 2024</p>
          <div class='social-icons'>

            <Link
              class='social-icon-link facebook'
              to='https://www.facebook.com/p/KIMS-HOME-100084184984393/'
              target='_blank'
              aria-label='Facebook'
            >
              <img className='footer-small-logo' src='/icons/facebook.svg'/>
            </Link>
            <Link
              class='social-icon-link instagram'
              to='https://www.instagram.com/kimshome_nibongtebal/'
              target='_blank'
              aria-label='Instagram'
            >
              <img className='footer-small-logo' src='/icons/instagram.svg'/>
            </Link>
            <Link
              class='social-icon-link airbnb'
              to='http://www.airbnb.com/rooms/691715553574322084'
              target='_blank'
              aria-label='Airbnb'
            >
              <img className='footer-small-logo' src='/icons/airbnb.svg'/>
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