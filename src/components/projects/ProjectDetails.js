import React from "react";

export const ProjectDetails = (props) => {
    const id = props.match.params.id;

    return (
        <div className="project-detail container section">
            <div className="card z-depth-0">
                <div className="card-content">
                    <span className="card-title">Project Title { id }</span>
                    <p>lorem ipsum...</p>
                </div>
                <div class="card-action grey lighten-4 grey-text">
                    <div>aijas ijas ajisa</div>
                    <div>September 3rd, 2 AM</div>
                </div>
            </div>
        </div>
    );
};
