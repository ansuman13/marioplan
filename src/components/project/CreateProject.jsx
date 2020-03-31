import React, { Component } from 'react'

export default class CreateProject extends Component {

    state = {
        title: '',
        content: ''
    }

    handleSubmit = (e) => {
        e.preventDefault()
        console.log(this.state)
    }

    handleChange = (e) => {
        this.setState({ [e.target.id]: e.target.value })
    }

    render() {
        return (
            <div className='container'>
                <form className="white section" onSubmit={this.handleSubmit}>
                    <h5>Create Project</h5>
                    <div className="input-field">
                        <label htmlFor="title">Title</label>
                        <input type="text" name="title" id="title" onChange={this.handleChange} />
                    </div>
                    <div className="input-field">
                        <label htmlFor="content">Content</label>
                        <textarea name="content" id="content" cols="30" rows="10" className="materialize-textarea" onChange={this.handleChange}></textarea>
                    </div>
                    <div className="input-field">
                        <button className="btn pink z-depth-1">Submit</button>
                    </div>
                </form>
            </div>
        )
    }
}
