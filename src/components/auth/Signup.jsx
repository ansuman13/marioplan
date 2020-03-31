import React, { Component } from 'react'

export default class Signup extends Component {

    state = {
        firstName:'',
        lastName:'',
        email:'',
        password:''
    }

    handleSubmit = (e) => {
        e.preventDefault()
        console.log(this.state)
    }

    handleChange = (e) => {
        this.setState({[e.target.id]:e.target.value})
    }

    render() {
        return (
            <div className='container'>
                <form className='text-grey text-darken-3 white' 
                onSubmit={this.handleSubmit}>
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
