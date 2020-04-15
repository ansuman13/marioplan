import React from 'react';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';
import { deletePost } from '../../store/actions/projectActions'
import moment from 'moment';

const ProjectDetails = (props) => {
    console.log(props)
    const deleteProject = () => {
        props.history.push('/')
        props.deletePost(props.match.params.id)
    }
    if (props.project){
       return <div className="project-details section container">
            <div className="card z-depth-0">
                <div className="card-content">
                    <span className="card-title">{props.project.title}</span>
                    <p>{props.project.content}</p>
                </div>
                <div className="card-action grey-text">
                    <p>Posted by {props.project.authorFirstName} {props.project.authorLastName}</p>
                    <button className="btn red right" onClick={deleteProject}>Delete</button>
                    <p>{moment(props.project.createdAt.toDate()).calendar()}</p>
                </div>

            </div>
        </div>
    }
    else{
        return (
            <div className="center"><p>Loading...</p></div>
            )
    }
    
}

const mapStateToProps = (state, ownProps) => {
    const id = ownProps.match.params.id
    const projects = state.firestore.data.projects
    const project = projects ? projects[id] : null;
    return {
        project: project
    }   
}


const mapDispatchToProps = (dispatch) => {
    return {
        deletePost: (projectId) => { 
            return dispatch(deletePost(projectId))
        }
    }
} 


export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    firestoreConnect([{ 'collection': 'projects' }])

)(ProjectDetails)