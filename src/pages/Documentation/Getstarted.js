import React from "react";
import DocumentationLayout from "../../components/DocumentationLayout/DocumentationLayout";
// import './Home.css';

const Getstarted = () => {
    return ( 
        <DocumentationLayout>
            <h1>Getting started </h1>
            <p>
             To get started you'll need an API key. They're free for development, open-source, and non-commercial use and you can get one from <a href="/register">here</a><br></br>

             you also need to know that there are basically two plans (developer and Advanced) and for the deveoper plan each user will have a limited number of requests per day. The numberof requests made varies from day to day depending on the number of requests made the previous day
             
            </p>

            <h6>Also we're assuming you know how to make web requests in your chosen programming language. We've included an example below if you need a place to start.</h6>
            <h6>here we are tying to get all of todays posts from punch news paper.</h6>
            <h6>its that easy!!!</h6><br />
            <div className="container">
                <div style={{backgroundColor: 'black'}} className="card text-white mb-3">
                <div className="card-body api-description">
                    <h6 className="card-title text-left text-white"><button className="btn-sm btn-success disabled">Get</button> <span style={{color: 'blue'}}>$</span> curl "http://9janewapi.herokuapp.com/?apikey=APIKEY/politics"
                    </h6><hr />
                    <p className="card-text text-left">
                    {'{'}<br /> 
                    "message": "Success!",<br />
                   
                    "data": [
                       <p>
                        
                      {'{'}<br></br>
                            "id": 0,<br/>
                            "summary": "Olalekan Adetayo, Abuja The Senior Special Assistant to the President on Media and Publicity, Garba Shheu, on Monday said the President, Major General Muhammadu Buhari (retd.), has signed the instrument of accession of the agreement for the establishment of the African Trade Insurance Agency. Shehu disclosed this in a statement titled “President Buhari signs instrument […]",<br/>
                            "date": " August 10th, 2020 ",<br/>
                            "photo": "https://cdn.punchng.com/wp-content/uploads/2019/01/25175332/Buhari-signs-up-new-CJN.jpg",<br/>
                            "title": "Buhari signs instrument for African Trade Insurance Agency",<br/>
                            "link": "https://punchng.com/buhari-signs-instrument-for-african-trade-insurance-agency/"
                       </p>
                        }<br/>
                    ]{'}'}
                    </p>
                </div>
                </div>
            </div>
        </DocumentationLayout>
     );
}
 
export default Getstarted;