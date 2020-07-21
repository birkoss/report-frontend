import React from "react";

import { Link, NavLink } from "react-router-dom";

export const ProjectSummary = ({project, onEditClicked, onDeleteClicked}) => {
    const projectUrl = "/project/" + project['id'];
    const logUrl = "/project/" + project['id'] + "/logs/create";
    
    return (
        <div className="card border-primary mb-3">
            <div className="main-action-bar card-header">
                <h2 className="main-title">{ project['name'] }</h2>
                <div className="main-action">
                    <NavLink to={logUrl} className="btn btn-outline-secondary">New Log</NavLink>
                </div>
            </div>

            <div className="card-body">

                {project['logs'].length === 0 && (
                  <p>Nothing to see here</p>
                )}

                {project['logs'].length > 0 && (
                  <table class="table table-striped">
                    <thead>
                      <tr>
                        <th scope="col">Name</th>
                        <th scope="col">Normal</th>
                        <th scope="col">Warning</th>
                        <th scope="col">Alert</th>
                      </tr>
                    </thead>
                    <tbody>
                      {project['logs'].map((single_log) => (
                        <tr>
                          <td>{single_log['name']}</td>
                          <td>0</td>
                          <td>0</td>
                          <td>0</td>
                        </tr>
                      ))}
                    </tbody>
                  </table> 
                )}

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