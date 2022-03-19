import React from 'react';
import { StarFill } from 'react-bootstrap-icons';
import './ShowReview.css';
import userphoto from '../../img/user.png';
import StarRatings from 'react-star-ratings';

const ShowReview = (props) => {
    const { owner, rating, comment } = props.r;
    return (
        <div className="col m-3">
            <div className="card rounded p-5 shadow-sm h-100 border-2">
                <img src={owner.photo || userphoto} className="card-img-top customer-picture" alt="..." />
                <div className="card-body">
                    <div className="card-info-details text-center">
                        <p className="card-text text-center">{comment.slice(0, 18)}</p>
                        <StarRatings
                            rating={parseFloat(rating)}
                            starDimension="20px"
                            starRatedColor="#E77C40"
                            starSpacing="2px"
                        />
                        {/* <div className="">
                            {start}
                            <StarFill style={{ color: "#E77C40" }} />
                            <StarFill style={{ color: "#E77C40" }} />
                            <StarFill style={{ color: "#E77C40" }} />
                            <StarFill style={{ color: "#E77C40" }} />
                            <StarFill style={{ color: "#E77C40" }} />

                        </div> */}
                        <h5 className="user-name">{owner.name}</h5>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ShowReview;