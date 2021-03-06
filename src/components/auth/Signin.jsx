import React, { Component } from 'react'
import { connect } from 'react-redux';
import { signInAction } from '../../store/actions/authActions';
import { Redirect } from 'react-router-dom';

class Signin extends Component {

    state = {
        email: '',
        password: ''
    }

    submitHandler = (e) => {
        e.preventDefault();
        this.props.signIn(this.state)
    }

    handleChange = (e) => {
        this.setState({ [e.target.id]: e.target.value })
    }

    render() {
        const { authError , auth } =  this.props
        if(auth.uid) {return <Redirect to='/'/>}
        return (
            <div className="signin container section">

                <form onSubmit={this.submitHandler} className='white'>
                    <div className="red-text center">
                        <p>{this.props.authError ? 'Login Failed' : null}</p>
                    </div>

                    <h5>Login In</h5>
                    
                    <div className="input-field">
                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" onChange={this.handleChange} />
                    </div>
                    
                    <div className="input-field">
                        <label htmlFor="password">Password</label>
                        <input type="password" id="password" onChange={this.handleChange} />
                    </div>

                    <div className="input-field">
                        <button className="btn pink">Submit</button>
                    </div>


                </form>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        authError: state.auth.authError,
        auth: state.firebase.auth
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        signIn: (creds) => { dispatch(signInAction(creds)) }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Signin)