import React from 'react';

const ProjectDetails = (props) => {
    return (
        <div className="project-details section container">
            <div className="card z-depth-0">
                <div className="card-content">
                    <span className="card-title">Project details - {props.match.params.id}</span>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laboriosam error dolor, assumenda fugit sunt at, vitae pariatur ullam harum incidunt deleniti quaerat saepe. Modi fugit saepe corporis consequatur quidem labore.</p>
                </div>
                <div className="card-action grey-text">
                    <p>Posted by The Ansuman Project</p>
                    <p>on 29 Jan 2020 2 PM</p>
                </div>
            </div>
        </div>
    )
}

export default ProjectDetails