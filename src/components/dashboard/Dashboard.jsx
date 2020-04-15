import React from 'react';
import Notifications from './Notification';
import ProjectsList from '../project/ProjectsList'
import { connect } from 'react-redux';
import { compose } from 'redux';
import { firestoreConnect } from 'react-redux-firebase';
import { Redirect } from 'react-router-dom';


class Dashboard extends React.Component {
    render() {
        const { projects, auth, notifications } = this.props
        if (!auth.uid) {
            return <Redirect to='/login' />
        }
        return (
            <div className="dashboad container">
                <div className="row">
                    <div className="col s12 m6">
                        <ProjectsList projects={this.props.projects} />
                    </div>
                    <div className="col s12 m5 offset-m1">
                        <Notifications notifications={notifications} />
                    </div>
                </div>
            </div>
        )
    }

}


const mapStateToProps = (state) => {
    return {
        projects: state.firestore.ordered.projects,
        auth: state.firebase.auth,
        notifications: state.firestore.ordered.notifications
    }
}

export default compose(
    connect(mapStateToProps),
    firestoreConnect([
        { collection: 'projects' , orderBy: ['createdAt', 'desc'] },
        { collection: 'notifications', limit: 3, orderBy: ['time', 'desc'] }
    ])
)(Dashboard)