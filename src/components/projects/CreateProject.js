import React, { useState } from "react";


const CreateProject = () => {
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("OK", title, content);
    };

    return (
        <div className="container">
            <form onSubmit={handleSubmit} className="white">
                <h5 className="grey-text text-darken-3">Create Project</h5>
                <div class="input-field">
                    <label htmlFor="title">Title</label>
                    <input type="text" id="title" onChange={(e) => setTitle(e.target.value)} />
                </div>
                <div class="input-field">
                    <label htmlFor="content">Content</label>
                    <textarea id="content" className="materialize-textarea" onChange={(e) => setContent(e.target.value)}></textarea>
                </div>
                <div class="input-field">
                    <button className="btn pink lighten-1 z-depth-1">Create</button>
                </div>
            </form>
        </div>
    );
};

export default CreateProject;