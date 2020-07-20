import React from "react";

import "./Loading.css";

export const Loading = (props) => {
    let containerClasses = "loading";
    if (props.fullscreen === true) {
        containerClasses += " loading-fullscreen";
    }
    return (
        <div className={containerClasses}>
            <div className="spinner-border text-secondary" role="status">
                <span className="sr-only">Loading...</span>
            </div>
        </div>
    );
}
