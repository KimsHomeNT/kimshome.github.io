import React from 'react';
import './Footer.css';
import { Button } from './Button';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className='footer-container'>
      <section className='footer-subscription'>
        <p className='footer-subscription-heading'>
          Any Enquiry?
        </p>
        <p className='footer-subscription-text'>
          Drop a message on our official WhatsApp
        </p>
        <div className='input-areas'>
          <form>
            <input
              className='footer-input'
              name='message'
              type='message'
              placeholder='Your Message'
            />
            <Button buttonStyle='btn--outline'>
                <img src={process.env.PUBLIC_URL + '/icons/whatsapp.png'}/>   WhatsApp Us
                  </Button>
          </form>
        </div>
      </section>


      <section class='social-media'>
        <div class='social-media-wrap'>
          <div class='footer-logo'>
            <Link to='/' className='social-logo'>
              Kim's Home
              <i class='fab fa-typo3' />
            </Link>
          </div>
          <small class='website-rights'>Kim's Home © 2024</small>
          <div class='social-icons'>

            <Link
              class='social-icon-link facebook'
              to='/'
              target='_blank'
              aria-label='Facebook'
            >
              <i class='fab fa-facebook-f' />
            </Link>
            <Link
              class='social-icon-link instagram'
              to='/'
              target='_blank'
              aria-label='Instagram'
            >
              <i class='fab fa-instagram' />
            </Link>
            <Link
              class='social-icon-link airbnb'
              to='/'
              target='_blank'
              aria-label='Airbnb'
            >
              <i class="fa-brands fa-airbnb"></i>
            </Link>
            <Link
              class='social-icon-link twitter'
              to='/'
              target='_blank'
              aria-label='Twitter'
            >
              <i class='fab fa-twitter' />
            </Link>
            <Link
              class='social-icon-link twitter'
              to='/'
              target='_blank'
              aria-label='LinkedIn'
            >
              <i class='fab fa-linkedin' />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;