import React, { useState } from "react";

import { Navbar } from "../components/layout/Navbar";


export const CreateProject = () => {
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("OK", title, content);
    };

    return (
        <div className="create-project">
            <Navbar />

            <div className="main-content container">
                <form onSubmit={handleSubmit} className="white">
                    <h1>Create Project</h1>

                    <div className="form-group">
                        <label htmlFor="title">Project Name</label>
                        <input type="text" className="form-control" id="title" placeholder="Please enter a valid email name" />
                    </div>

                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
        </div>
    );
};
