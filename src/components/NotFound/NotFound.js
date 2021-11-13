import React from 'react';
import './NotFound.css';

const NotFound = () => {
    // use background picture for show 404 not found 
    return (
        <div className="notfound-b">
            <img className="img-fluid" src="https://i.ibb.co/jf2PFdT/404-error-page-not-found.jpg"  alt="bg"/>
        </div>
    );
};

export default NotFound;