import React, { Component } from "react";
import { Link } from "react-router-dom";
import RedPanda from "../Images/redPanda.png";
import { connect } from "react-redux";

// connect is a higher order function that returns a higher order component


class Home extends Component {

  // state = {
  //   posts: []
  // }

  render(){
    // const { posts } = this.state; This is replaces with the line below as the store is now supplying the posts and not the state
    const { posts } = this.props;
    console.log(this.props)
    const postList = posts.length ? (
      posts.map( post => {
        return (
          <div className="post card" key={post.id}>
            <img src={RedPanda} alt="Red panda"/>
            <div className="card-content">
              <Link to={"/" + post.id}>
                <span className="card-title">
                  {post.title}
                </span>
              </Link>
              
              <p>{post.body}</p>
            </div>
          </div>
        );
      })) : (
      <div className="center">No posts yet.</div>
    )
    return (
      <div className="container home">
        <h4 className="center">Home</h4>
        {postList}
      </div>
    )
  }
}

//This fn maps the posts from the store state onto the props post
const mapStateToProps = (state) => {
  return {
    posts: state.posts,
  }
}

export default connect(mapStateToProps)(Home);