import React from 'react';
import './Dashboard.css';
const DashBoardContent = () => {
    return (
<div className="row">
<div className="center col-md-6">
<div className="card m-b-30">
<div className="card-body">
<div className="xp-social-profile">
    <div className="xp-social-profile-top">
    <div className="row">
        <div className="col-3">
        <div className="xp-social-profile-star py-3">
            <i className="mdi mdi-star font-24" />
        </div>
        </div>
        <div className="col-6">
        <div className="xp-social-profile-avatar text-center">
            <img src="https://bootdey.com/img/Content/avatar/avatar6.png" alt="user-profile" className="rounded-circle img-fluid" />
            <span className="xp-social-profile-live" />
        </div>
        </div>
        <div className="col-3">
        <div className="xp-social-profile-menu text-right py-3">
            <i className="mdi mdi-dots-horizontal font-24" />
        </div>
        </div>
    </div>
    </div>
    <div className="xp-social-profile-middle text-center">
    <div className="row">
        <div className="col-12">
        <div className="xp-social-profile-title">
            <h5 className="my-1 text-black">karina_simons</h5>
        </div>
        <div className="xp-social-profile-subtitle">
            <p className="mb-3 text-muted">Karina Simons</p>
        </div>
        <div className="xp-social-profile-desc">
            <p className="text-muted">Lifestyle coach and photographer <br />delivering best images only...</p>
        </div>
        </div>
    </div>
    </div>
    <div className="xp-social-profile-bottom text-center">
    <div className="row">
        <div className="col-4">
        <div className="xp-social-profile-media pt-3">
            <h5 className="text-black my-1">45</h5>
            <p className="mb-0 text-muted">Posts</p>
        </div>
        </div>
        <div className="col-4">
        <div className="xp-social-profile-followers pt-3">
            <h5 className="text-black my-1">278k</h5>
            <p className="mb-0 text-muted">Fans</p>
        </div>
        </div>
        <div className="col-4">
        <div className="xp-social-profile-following pt-3">
            <h5 className="text-black my-1">552</h5>
            <p className="mb-0 text-muted">Likes</p>
        </div>
        </div>
    </div>
    </div>
</div>
</div>
</div>
</div>
</div>

    );
}
 
export default DashBoardContent;