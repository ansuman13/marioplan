import React, { Component } from 'react'

export default class Signin extends Component {

    state = {
        email:'',
        password:''
    }

    submitHandler = (e) => {
        e.preventDefault();
        console.log(this.state)
    }

    handleChange = (e) => {
        this.setState({[e.target.id]:e.target.value})
    }

    render() {
        return (
            <div className="signin container section">
                <form onSubmit={this.submitHandler} className='white'>
                    <h5>Login In</h5>
                    <div className="input-field">
                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" onChange={this.handleChange}/>
                    </div>
                    <div className="input-field">
                        <label htmlFor="password">Password</label>
                        <input type="password" id="password" onChange={this.handleChange}/>
                    </div>
                    <div className="input-field">
                        <button className="btn pink">Submit</button>
                    </div>

                </form>
            </div>
        )
    }
}
