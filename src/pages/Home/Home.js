import React from "react";
import Layout from "../../components/Layout/Layout";
import './Home.css';



const Home = () => {
    return ( 
        <Layout>
<div>
  <br />
  <br />
  <div className="container">
    <div style={{backgroundColor: 'black'}} className="card text-white mb-3">
      <div className="card-body api-description">
        <h4 className="card-title text-left"><button className="btn-sm btn-success disabled">Get</button> <span style={{color: 'blue'}}>$</span> curl "http://9janewapi.herokuapp.com/?api_key=APIKEY&amp;url=URL"
        </h4><hr /><br />
        <p className="card-text text-left">
          {'{'}<br /> 
          "status": "error",<br />
          "code": "apiKeyInvalid",<br />
          "message": "Your API key is invalid or incorrect. Check your key, or go to https://newsapi.org to create a free API key."<br />
          {'}'}
        </p>
        <a href="#" className="card-link">Read full documentation here</a>
      </div>
    </div>
  </div>
  <div className="product-braging">
    <div className="container">
      <div className="row">
        <div className="col-sm">
          <span className="iconify" data-icon="whh:lightning" data-inline="false" data-width={70} data-height={70} />
          <h4 className="braging-headers">Fast and Reliable</h4><br />
          <p>
            we offer unparalleled speed and reliability so you can easily make API calls and get super-fast response.  
            Contact our friendly customer support if you run into any trouble!
          </p>
        </div>
        <div className="col-sm">
          <span className="iconify" data-icon="emojione-monotone:heavy-check-mark" data-inline="false" data-width={70} data-height={70} />
          <h4 className="braging-headers">Make 400+ free calls per day</h4>
          <p>
            Register and make free api calls. Contact contact sales for special use of this service on a large scale. We reply within an hour.
          </p>
        </div>
        <div className="col-sm">
          <span className="iconify" data-icon="mdi:alphabetical-variant" data-inline="false" data-width={70} data-height={70} />
          <h4 className="braging-headers">customizable and easy to use</h4>
          <p>
            9ja news API easy to customize. Get JSON results with simple HTTP GET requests.
          </p>
        </div>
      </div>
    </div>
  </div>
  <div className="extra-div">
    <h4 className="extra-div-heading">
      Ready to Make those API calls?
    </h4>
    <p className="extra-div-heading">
      Get started with 400+ free API calls per day or contact sales
    </p>
    <div className="mt-4 w-70 d-flex justify-content-center">
      <div className="ml-4 m-1">
        <a href="#">
          <div id="hero-cta" className="btn lower-btn" style={{width: 170}}>sign up</div>
        </a>
      </div>
    </div>
  </div>
</div>

        </Layout>
     );
}
 
export default Home;