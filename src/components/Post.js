import React, { Component } from 'react'
import axios from 'axios' ;
import { connect } from 'react-redux'
import { deletePost } from '../actions/PostActions'

 class Post extends Component {

    // state = {
    //     post: null
    // }
    // to load the post with the requested id
    // componentDidMount(){
    //     // get the id from the url 
    //     let id = this.props.match.params.post_id ;
    //     //  get the idividual post using that id
    //     axios.get('https://jsonplaceholder.typicode.com/posts/' + id) 
    //     .then(res =>{
    //         this.setState({
    //             post: res.data
    //         })
    //      //   console.log(res)
    //     })
        
    // }

    handleClick =() => {
        this.props.deletePost(this.props.post.id);
        this.props.history.push('/');
    }
    render() {
       //console.log(this.props)
        const post = this.props.post == null ? ( <h3 className="center">Loading</h3>) 
        : (
            <div className="center">
                <h2>{this.props.post.title}</h2>
                <p>{this.props.post.body}</p>
                <div className="center">
                    <button className="btn grey" onClick={this.handleClick}>
                        Delete Post
                    </button>

                </div>

            </div>
        )
        return (
            <div className="container">
                
                {post}
                
            </div>
        )
    }
}

const mapstateToProps = (state , ownProps) => {
    let id = ownProps.match.params.post_id ;
    return {
        post: state.posts.find(post => post.id ===id)
        }   

}

const mapDispatchToProps = (dispatch) => {
    return {
        deletePost: (id) => { dispatch (deletePost(id))} ,
        
    }
}

export default connect(mapstateToProps , mapDispatchToProps)(Post)