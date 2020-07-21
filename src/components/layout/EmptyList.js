import React from "react";

export const EmptyList = ({title, content}) => {
    return (
        <div className="card">
            <div className="card-body">
                <h4 className="card-title">{title}</h4>
                <p className="card-text">{content}</p>
            </div>
        </div>
    );
}