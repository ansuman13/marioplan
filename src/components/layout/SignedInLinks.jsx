import React from 'react';
import {NavLink} from 'react-router-dom';

const SignedInLinks = () => {

    return (
        <ul className='right'>
            <li><NavLink to='/create'>Create</NavLink></li>
            <li><NavLink to='/logout'>Logout</NavLink></li>
            <li><span className='btn btn-floating pink lighten-1'>AN</span></li>
        </ul>
    )

}

export default SignedInLinks