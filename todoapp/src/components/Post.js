import React from "react";
import axios from "axios";


class Post extends React.Component {

  state = {
    id: "", 
    body: null,
  }
  
  componentDidMount(){
    let id = this.props.match.params.post_id;
    axios.get("https://jsonplaceholder.typicode.com/posts/" + id).then(res => {
      this.setState({
        id: id,
        body: res.data,
      });
      console.log(this.state.body);
    });
  }
  
  render() {
    const body = this.state.body ? (
      <div className="post">
        <h4 className="center">{this.state.body.title}</h4>
        <p>{this.state.body.body}</p>
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

export default Post;