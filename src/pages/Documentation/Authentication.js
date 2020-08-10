
import React from "react";
import DocumentationLayout from "../../components/DocumentationLayout/DocumentationLayout";
// import './Home.css';

const Authentication = () => {
    return ( 
        <DocumentationLayout>
            <h1>Authentication</h1>
                <h5>Authentication is handled with a simple API key.</h5>
                    <h6>sign up <a href="">here </a>to get an Api Key </h6>
                    <h6>You only attach your API key to a request Via the apiKey querystring parameter.   
                    </h6>

                    <h6>If you don't append your API key correctly, or your API key is invalid, you will receive a 
                    <strong> 400 - invalid credentials error.</strong>
                    </h6>



    
 
        </DocumentationLayout>
     );
}
 
export default Authentication;