import React, { Component } from 'react'
import Form from './Form' ;

export default class About extends Component {

    state = {
        todos : []
    }


    addTodo =(todo) => {
        todo.id = Math.floor(Math.random()*100);
        let newlist = [...this.state.todos , todo ] ;
        this.setState({
            todos: newlist
        })
        console.log(this.state)
      
    }


    render() {
        return (
            <div className="center">
           <h3 className="text-red">Todo's</h3>
           <div className='container input'>
            <Form addTodo={this.addTodo} ></Form>
            </div>
            </div>
        )
    }
}
