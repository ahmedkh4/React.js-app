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
 deleteTodo (id) {
     console.log("delete Item")
     let newList = this.state.todos.filter((todo) => {
         return id != todo.id
     });
     this.setState({
        todos: newList
     })
     console.log(this.state)
     
 }
    render() {

        const  showTodo = this.state.todos.length ==0 ? (<h4 className="mt-5 red-text">there is no todo left</h4>) 
        : (
            this.state.todos.map((todo) => {
                return (
                    <div className="collection" key={todo.id}>
                        <p className="collection-item"> {todo.todo}
                        <span className="right red-text" onClick={() => this.deleteTodo(todo.id)}>X</span>
                        </p>
                    </div>
                )
            })
        )

        return (
            <div className="center">
           <h3 className="text-red">Todo's</h3>
           <div className='container input'>
               {showTodo}
               {"  "}
               <br/>
            <Form addTodo={this.addTodo} ></Form>
            </div>
            </div>
        )
    }
}
