import React from 'react';
import { NavLink } from 'react-router-dom';
import { signOutAction } from '../../store/actions/authActions'
import { connect } from 'react-redux';


const SignedInLinks = (props) => {
    return (
        <ul className='right'>
            <li><NavLink to='/create'>Create</NavLink></li>
            <li><a onClick={props.signOut} >Logout</a></li>
            <li><span className='btn btn-floating pink lighten-1'>{props.profile.initials}</span></li>
        </ul>
    )

}

const mapDispatchToProps = (dispatch) => {
    return {
        signOut: () => dispatch(signOutAction())
    }
}

export default connect(null, mapDispatchToProps)(SignedInLinks)