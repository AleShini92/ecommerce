import React from "react";
import "./Skeleton.scss";

const Skeleton = () => {
    return (
        <div className="skeleton-container">
            <div className="skeleton-image" />
            <div className="skeleton-detail">
                <div className="skeleton-title"></div>
                <div className="skeleton-category"></div>
                <div className="skeleton-flex">
                    <div className="skeleton-price"></div>
                    <div className="skeleton-button"></div>
                </div>
            </div>
        </div>
    );
};

export default Skeleton