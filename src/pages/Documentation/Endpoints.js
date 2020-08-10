import React from "react";
import DocumentationLayout from "../../components/DocumentationLayout/DocumentationLayout";
// import './Home.css';

const Endpoints = () => {
    return ( 
        <DocumentationLayout>
           <h1>Endpoints</h1>

   <h5> <strong>9ja news api has 2 main endpoints:</strong></h5>
    
    <ul>
        <li><strong>vanguard/api/vanguard/news - returns the days recent news from vanguard nigeria.</strong></li>

        <li><strong>punch /api/punch/news - returns the days recent news from punch news paper.</strong></li>
    </ul>
    <hr></hr>
        <h6>We also have a sub endpoint that can be used to retrieve News categories from either of the main news sources. for example:</h6>

        <ul>
            <li>/api/vanguard/apikey= YOUR API KEY/category</li>
            <li>
            /api/vanguard/apikey= YOUR API KEY/category
            </li>
        </ul>
        <h6><strong>and below is a list of categories that can be searched from:</strong></h6>

        <h5><strong>Categories</strong></h5>
        <ul>
            <li>politics</li>
            <li>business</li>
            <li>entertainment</li>
            <li>technology</li>
            <li>sports</li>
        </ul>
        <h6>
            The category is to be apended to the query parameter and would return a response about the category provided in the querying parameter (including title, description, and category, url, image,id) of each news returned in the response
        </h6>

        <br/>

        <h6>We also have a sub endpoint that can be used to retrieve certain search words or terms.<br/>

        Lets say we want to get the latest articles about president buhari. "president buhari" is the search term and should be apended to the end of query parameter for example
            </h6>
            <ul>
                <li>
                    <p>/api/search/apikey= YOUR API KEY/president buhari</p>
                </li>
            </ul>
 
        </DocumentationLayout>
     );
}
 
export default Endpoints;