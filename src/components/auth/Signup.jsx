import React, { Component } from 'react'
import { connect } from 'react-redux';
import {Redirect} from 'react-router-dom';
import { signUpAction } from '../../store/actions/authActions';

class Signup extends Component {

    state = {
        firstName:'',
        lastName:'',
        email:'',
        password:''
    }

    handleSubmit = (e) => {
        e.preventDefault()
        console.log(this.state)
        this.props.signUp(this.state)
    }

    handleChange = (e) => {
        this.setState({[e.target.id]:e.target.value})
    }

    render() {
        const { auth, authError } = this.props;
        if(auth.uid) {return <Redirect to='/'/>}
        return (
            <div className='container'>
                <form className='text-grey text-darken-3 white' 
                onSubmit={this.handleSubmit}>

                    <div className="center red-text">
                        { authError ? <p> {authError.message} </p>:null }
                    </div>
                    <h5 className='text-grey'>Sign up</h5>
                    <div className="input-field">
                        <label htmlFor="FirstName">First Name</label>
                        <input type="text" name="FirstName" id="firstName" onChange= {this.handleChange}/>
                    </div>

                    <div className="input-field">
                        <label htmlFor="LastName">Last Name</label>
                        <input type="text" name="LastName" id="lastName" onChange= {this.handleChange}/>
                    </div>

                    <div className="input-field">
                        <label htmlFor="email">Email</label>
                        <input type="email" name="email" id="email" onChange= {this.handleChange}/>
                    </div>
                    
                    <div className="input-field">
                        <label htmlFor="password">password</label>
                        <input type="password" name="password" id="password" onChange= {this.handleChange}/>
                    </div>
                    
                    <div className="input-field">
                        <button type="submit" className="btn pink">Submit</button>
                    </div>
                </form>
                
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        auth: state.firebase.auth,
        authError: state.auth.authError
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        signUp: (newUser) => dispatch(signUpAction(newUser))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Signup);