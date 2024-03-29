import React from "react";
import { connect } from "react-redux";
import { deletePost } from "../actions/postActions"

class Post extends React.Component {

  handleClick = () => { 
    this.props.deletePost(this.props.post.id);
    this.props.history.push("/");
  }

  render() {
    const body = this.props.post ? (
      <div className="post">
        <h4 className="center">{this.props.post.title}</h4>
        <p>{this.props.post.body}</p>
        <div className="center">
          <button className="btn grey" onClick={this.handleClick}>
            Delete Post
          </button>
        </div>
      </div>
    ) : (
      <div className="center">Still loading post...</div>
    );
    return (
      <div className="container">
        {body}
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  let id = parseInt(ownProps.match.params.post_id); //This is how to get details about route params
  return {
    post: state.posts.find( post => post.id === id)
  } 
}

const mapDispatchToProps = (dispatch) => {
  //The property we want to map to the component
  return {
    deletePost: (id) => { dispatch(deletePost(id)) }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Post);