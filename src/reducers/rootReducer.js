
const initState = {
    posts :[
        {id:"1"  , title:"hey1"    , body: "dvds fd ddd dfss "  } ,
        {id: "2" , title:  "hello2"  , body: "dvds nts/react tut dfss" } ,
        {id: "3" , title: "greeting3"   , body: "~/Documents/react tuto (ninja net)/" } ,
    ]
}


const rootReducer = (state = initState, action) => {
    if (action.type === 'DELETE_POST') {
        
        let newPosts = state.posts.filter(post => {
    return action.id !== post.id
        });

        return {
            ...state,
            posts : newPosts
        }
    }
    
    return state ; 
}

export default rootReducer ;