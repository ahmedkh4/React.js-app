import React from 'react'
// u need first to install " npm i react-router-dom "
import { NavLink , withRouter} from 'react-router-dom' ; 


 const Navbar = (props) => {

    // redirection to another (about) page within 2 secs
    //  setTimeout(()=> {
    //     props.history.push('/about')
    // },10000);
    ////////////////

    return (
     <nav className="nav-wrapper red darken-3">
         <div className="container">
             <a className="brand-logo left" href="/">Poke'sTime</a>
             <ul className="right">
                 {/* using NavLin to for routing and having the active class tag  */}
                 <li><NavLink to="/">Home</NavLink></li>
                 <li><NavLink to="/about">About</NavLink></li>
                 <li><NavLink to="/contact">Contact</NavLink></li>
             </ul>

         </div>

     </nav>  
    
    )
}
//"withRouter : higher order components {adding props }" give the component a route ( see app.js)
export default withRouter (Navbar) ;