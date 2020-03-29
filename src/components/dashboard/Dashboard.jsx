import React from 'react';
import Notifications from './Notification';
import ProjectsList from '../project/ProjectsList'

class Dashboard extends React.Component{
    render() {
        return (
            <div className="dashboad container">
                <div className="row">
                    <div className="col s12 m6">
                        <ProjectsList/>
                    </div>
                    <div className="col s12 m5 offset-m1">
                        <Notifications/>
                    </div>
                </div>
            </div>
        )
    }

}

export default Dashboard