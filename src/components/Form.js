import React, { Component } from 'react'

export default class Form extends Component {

    state = {
        
        todo: ""
    }
handleChange = (e) => {
this.setState({
    todo : e.target.value
   
})
}

 handleSubmit = (e) => {
        e.preventDefault() ;
        this.props.addTodo(this.state)
        this.setState({ todo:""})
        
    }
    render() {
        return (
            <form onSubmit={this.handleSubmit}> 
            <label to="name">write your todo</label>
            <input type="text"  onChange={this.handleChange} value={this.state.todo} />
            <button className='btn blue' onSubmit={this.handleSubmit} >Add</button>

            </form>
        )
    }
}
