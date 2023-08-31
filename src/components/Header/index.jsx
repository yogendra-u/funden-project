import '@/components/Header/index.css';
import email from "@/assets/header/email-logo.png";
import location from '@/assets/header/loc-logo.png';
import twitter from '@/assets/header/twitter-logo.png';
import youtube from '@/assets/header/youtube-logo.png';
import behance from '@/assets/header/behance-logo.png';
import google from '@/assets/header/google-logo.png';

function Header() {
    return (
      <>
      <div className='header-main-container'>
        <div className='header-container'>
          {/* <div className='header-left-col'> */}
            <ul className='header-contact-info'>
              <li className='header-email' ><img src={email} alt='' className='header-email-logo' />support@gmail.com </li>
              <li className='header-location'> <img src={location} alt="" className='header-location-logo' /> 250 Main Street, 2nd Floor, USA</li>
            </ul>
          {/* </div> */}
          <div className='header-right-col'>
            <ul className='header-social-icon'>
              <li><img src={twitter} alt="" className='header-twitter-logo'/></li>
              <li> <img src={youtube} alt="" className='header-youtube-logo'/></li>
              <li> <img src={behance} alt="" className='header-behance-logo'/></li>
              <li><img src={google} alt="" className='header-google-logo'/></li>
            </ul>
          </div>
        </div>
      
      </div>
        
      </>
    );
  }
  
  export default Header;