import React from 'react';
import { StarFill } from 'react-bootstrap-icons';
import './ShowReview.css';
import userphoto from '../../img/user.png';

const ShowReview = (props) => {
    const { name, email, photo, start, description } = props.r;
    return (
        <div className="col m-3">
            <div className="card rounded p-5 shadow-sm h-100 border-2">
                <img src={photo || userphoto} className="card-img-top customer-picture" alt="..." />
                <div className="card-body">
                    <div className="card-info-details text-center">
                        <p className="card-text text-center">{description.slice(0, 18)}</p>
                        <div className="">
                            {start}
                            <StarFill style={{ color: "#E77C40" }} />
                            <StarFill style={{ color: "#E77C40" }} />
                            <StarFill style={{ color: "#E77C40" }} />
                            <StarFill style={{ color: "#E77C40" }} />
                            <StarFill style={{ color: "#E77C40" }} />

                        </div>
                        <h5 className="user-name">{name}</h5>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ShowReview;