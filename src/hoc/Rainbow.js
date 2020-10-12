import React from 'react'
// this is a higher order component 
 const  Rainbow = (WrappedCoponent) => {

    //  things u want to do (logic)
    const colors = ['red' , 'blue' , 'orange' , 'green' , 'yellow' , 'purple'];
    const randomcolor = colors[Math.floor(Math.random() * 5)];
    const className = randomcolor +'-text' ;
  
    // dont forget to give the props
    return (props) => {
        return (
            <div className= {className}>
                {/* return ur wrapped component */}
                <WrappedCoponent {...props}/>
            </div>
        )
    }
}
export default Rainbow
