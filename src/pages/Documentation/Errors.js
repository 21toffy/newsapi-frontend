import React from "react";
import DocumentationLayout from "../../components/DocumentationLayout/DocumentationLayout";
// import './Home.css';

const Errors = () => {
    return ( 
        <DocumentationLayout>
        <h1>
          Errrors  
        </h1> 
        <h5>
            Each successfull request will be counted. In cases where a request fails we will return a 500 error, you may retry the request and you will not be charged for the unsuccessful request (you are only charged for successful requests, 200 and 404 status codes). Make sure to catch these errors!.
        </h5>

        <br>
        </br>

        <ul>
            <li>
                200 - OK. The request was executed successfully.
            </li>
            <li>
                404 - NOT FOUND. The resource or page was not found.
            </li>
            <li>
                400 - Bad Request. Your Api Key or username is Invalid. carefully check and fix!
            </li>
            <li>
                429 - Too Many Requests. you have exhausted all your requests for the day.
            </li>
            <li>
                500 - Server Error. Something went wrong on our side.
            </li>           
        </ul>

        <hr></hr>

        <h1>
            what these errors mean
        </h1>
        <h5>
            When an HTTP error is returned we populate the code and message properties in the response containing more information. Here are the possible options:
        </h5>
        <br></br>
        <ul>
            <li>
                200- when  successful request was made
            </li>

            <li>
                404- You have requested a source which does not exist.
            </li>

            <li>
                400 - You have invalid credentials in your request. You need to check and correct them. accordingly.
            </li>

            <li>
                429 - You have this means that you have exhausted the number of request allocated to you for that day
            </li>

            <li>
                500 - This shouldn't happen, and if it does then it's our fault, not yours. Try the request again shortly.
            </li>

        </ul>
        <br />
  <br />
  <div className="container">
    <div style={{backgroundColor: 'black'}} className="card text-white mb-3">
      <div className="card-body api-description">
        <h6 className="card-title text-left text-white"><button className="btn-sm btn-success disabled">Get</button> <span style={{color: 'blue'}}>$</span> curl "http://9janewapi.herokuapp.com/?api_key=APIKEY/url=URL"
        </h6><hr /><br />
        <p className="card-text text-left">
          {'{'}<br /> 
          "status": "bad request",<br />
          "code": "400",<br />
          "message": "Your Api Key or username is Invalid. carefully check and fix!
, or go to https://9janewsapi.herokuapp.com to create a free API key."<br />
          {'}'}
        </p>
      </div>
    </div>
  </div>
    </DocumentationLayout>
     );
}
 
export default Errors;