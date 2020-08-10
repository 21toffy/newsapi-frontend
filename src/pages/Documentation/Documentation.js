import React from "react";
import DocumentationLayout from "../../components/DocumentationLayout/DocumentationLayout";
// import './Home.css';

const Documentation = () => {
    return ( 
        <DocumentationLayout>
            <h1>Documentation</h1>
            <br></br>

    <h6>
        9jaNewsAPI is a simple HTTP REST API for searching and retrieving live articles from News Media. you can get from a specified list of search words articles with any combination of the following criteria:
    </h6>
    <br>
    </br>
    <ul>
        <li>
            Keyword or phrase. Eg: find all articles containing the word 'Corona'.
        </li>
        <li>           
            Source name. Eg: find all breaking News on vanguard NewsPaper
        </li>
        <li>
            Source domain name. Eg: find all articles published on Punch.com.ng            
        </li>
    </ul>
    <br></br>
    <h6> 
        You need an API key to use our API - this is a unique key that identifies your requests. They're free for development, open-source, and non-commercial use. You can get one here: <a href="">get API key</a>.
    </h6>

        </DocumentationLayout>
     );
}
 
export default Documentation;