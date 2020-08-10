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
                    <h6 className="card-title text-left text-white"><button className="btn-sm btn-success disabled">Get</button> <span style={{color: 'blue'}}>$</span> curl "http://9janewapi.herokuapp.com/?apikey=APIKEY/politics"
                    </h6><hr />
                    <p className="card-text text-left">
                    {'{'}<br /> 
                    "message": "Success!",<br />
                   
                    "data": [
                      <ul>
                        <li>
                        <p>
                        
                        {'{'}<br></br>
                              "id": 0,<br/>
                              "summary": "Olalekan Adetayo, Abuja The Senior Special Assistant to the President on Media and Publicity, Garba Shheu, on Monday said the President, Major General Muhammadu Buhari (retd.), has signed the instrument of accession of the agreement for the establishment of the African Trade Insurance Agency. Shehu disclosed this in a statement titled “President Buhari signs instrument […]",<br/>
                              "date": " August 10th, 2020 ",<br/>
                              "photo": "https://cdn.punchng.com/wp-content/uploads/2019/01/25175332/Buhari-signs-up-new-CJN.jpg",<br/>
                              "title": "Buhari signs instrument for African Trade Insurance Agency",<br/>
                              "link": "https://punchng.com/buhari-signs-instrument-for-african-trade-insurance-agency/"
                          }<br/>
                      ]{'}'}
                         </p>
                        </li>
                      </ul>
                    </p>
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