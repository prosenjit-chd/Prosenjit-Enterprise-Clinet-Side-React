import React from 'react';
import { StarFill } from 'react-bootstrap-icons';
import './ShowReview.css';
import userphoto from '../../img/user.png';

const ShowReview = (props) => {
    const { name, email, photo, start, description } = props.r;
    return (
        <div class="col m-3">
            <div class="card rounded p-5 shadow-sm h-100 border-2">
                <img src={photo || userphoto} class="card-img-top customer-picture" alt="..." />
                <div class="card-body">
                    <div class="card-info-details text-center">
                        <p class="card-text text-center">{description.slice(0, 18)}</p>
                        <div class="">
                            {start}
                            <StarFill style={{ color: "#E77C40" }} />
                            <StarFill style={{ color: "#E77C40" }} />
                            <StarFill style={{ color: "#E77C40" }} />
                            <StarFill style={{ color: "#E77C40" }} />
                            <StarFill style={{ color: "#E77C40" }} />

                        </div>
                        <h5 class="user-name">{name}</h5>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ShowReview;