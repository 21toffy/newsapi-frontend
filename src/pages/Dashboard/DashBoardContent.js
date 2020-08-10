import React from 'react';
import './Dashboard.css';

const DashBoardContent = () => {
    return (

<>
<div class="row center">
       
<img src="" alt="user-profile" className="rounded-circle" />

    <span className="rest">name surname</span>
    <span className="rest"></span>
    </div>
    <div class="row center">
       
       {/* <img src="" alt="user-profile" className="rounded-circle" /> */}
       
           {/* <span className="rest">name surname</span> */}
           <span className="rest">email@mail.com</span>
           </div>
    <br></br>
    <div class="row center">
       
    <span className="rest"><h4>No of curls</h4>321</span>
    <span className="rest"><h4>curls left</h4>31</span>
    <span className="rest">Test2</span>
    </div>
</>                

    );
}
 
export default DashBoardContent;