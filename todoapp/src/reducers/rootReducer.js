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
  return state;
}

export default rootReducer;