import React, {Component} from 'react'
 // u need to install it " npm i axios"
//import axios from 'axios'
import {Link} from 'react-router-dom' ;
import Rainbow from "../hoc/Rainbow" ;
import Pokeball from '../pokeball.png' ;
import {connect } from 'react-redux' ;

class Home extends Component{

    // old school way ( without redux )
    // // state = {
    // //     posts: []
    // //   }

    // // //  axios for fetching data ( can be used in componentdidmount)
    // // componentDidMount(){
    // //     axios.get('https://jsonplaceholder.typicode.com/posts/')
    // //       .then(res => {
    // //        // console.log(res.data);
    // //         this.setState({
    // //           posts: res.data.slice(0,10)
    // //         });
    // //       //  console.log(this.state.posts);
    // //       })
    // //   }


    render() {
        
        const { posts } = this.props ; 
        console.log(this.props)
        const postList = posts.legnth =!0 ? (
            posts.map(post => {
                return (
                    <div className="post card" key={post.id}>
                        <img  src={Pokeball} alt="A pokeball"/>
                       <div className="card-content">
                           <Link  to={'/'+post.id}>
                            <span className="card-title red-text">{post.title}</span>
                            </Link>
                            <p>{post.body}</p>
                        </div>

                    </div>
                )

            })
        ) : (
            <div className="center"> No posts yet</div>
        )


        return(
        <div className="container home">
        <h1 className="center">Home</h1>
        
            {postList}
           
        
        
    </div>)
    }
}
//  take the part of the globale state that u need and return it as props 
const mapStateToProps = (state) => {
    return {
        posts: state.posts
    }
}

export default  connect(mapStateToProps)(Home) 
