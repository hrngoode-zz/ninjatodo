const initState = {
  posts: [
    {
      id: 1,
      title: "one",
      body: "asdfk;laj asdfljjkafsdjkl"
    },
    {
      id: 2,
      title: "two",
      body: "bla bla bla"
    },
    {
      id: 3,
      title: "three",
      body: "wonderful"
    }
  ]
}

const rootReducer = (state = initState, action) => {
  switch (action.type) {
    case "DELETE_POST":
      let newPosts = state.posts.filter( element => element.id !== action.id );

      return {
        ...state, 
        posts: newPosts
      }

    case "UPLOAD_POST":

      // let newPosts1 = [...state.posts, {
      //   id: action.id,
      //   title: action.title,
      //   body: action.body
      // }];

      return {
        ...state,
        posts: [...state.posts, {
          id: action.id,
          title: action.title,
          body: action.body
        }]
      } 
  
    default:
      return state;
  }
}

export default rootReducer;