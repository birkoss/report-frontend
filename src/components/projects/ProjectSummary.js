import React from "react";

import { Link } from "react-router-dom";

export const ProjectSummary = ({project, onEditClicked, onDeleteClicked}) => {
    const projectUrl = "/project/" + project['id'];
    
    return (
        <div className="card border-primary mb-3">
            <div className="card-header">{ project['name'] }</div>
            <div className="card-body">
                <h4 className="card-title">Notifications</h4>
                <p className="card-text">0 Notification(s), 2 Warning(s) and 1 error(s)</p>

                <Link className="card-link" to={projectUrl}><button className="btn btn-link card-link">See</button></Link>
                <button onClick={onEditClicked} className="btn btn-link card-link">Edit</button>
                <button onClick={onDeleteClicked} className="btn btn-link card-link text-danger">Delete</button>
            </div>
        </div>
    );
}

/*

<div class="card border-primary mb-3">
    <div class="card-header">Header</div>
    <div class="card-body">
        <h4 class="card-title">Primary card title</h4>
        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    </div>
</div>

<div class="card border-danger mb-3" style="max-width: 20rem;">
  <div class="card-header">Header</div>
  <div class="card-body">
    <h4 class="card-title">Danger card title</h4>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  </div>
</div>
<div class="card border-warning mb-3" style="max-width: 20rem;">
  <div class="card-header">Header</div>
  <div class="card-body">
    <h4 class="card-title">Warning card title</h4>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  </div>
</div>

*/