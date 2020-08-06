import React from 'react';
import './Header.css';
import Toggle from '../Toggle/Toggle';

const Header = () => {
    return ( 
       <header>
           <Toggle/>
  <h2 className="header-h2">
    Search Nigerian news with code
  </h2>
  <h4 className="header-h4">
    Get Nigerian based news headlines, and search for articles from news sources in Nigeria with a simple API call! 
  </h4>
  <h5 className="header-h5">
    Get started with 700 free API calls. No credit card required. 
  </h5>
  <div className="mt-4 w-70 d-flex justify-content-center">
    <div className="ml-4 m-1">
      
        <div id="hero-cta" className="btn" style={{width: 170}}>GET API KEY</div>
    </div>
  </div>
</header>

     );
}
 
export default Header;