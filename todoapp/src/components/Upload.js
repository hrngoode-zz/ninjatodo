import React from "react";
import { connect } from "react-redux";
import RedPanda from "../Images/redPanda.png";
import { uploadPost } from "../actions/postActions"



class Upload extends React.Component {

  state = {
    title: ""
  }

  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state.title);
    this.props.uploadPost(this.state.title);
    this.setState({
      title: ""
    })
  }

  handleChange = (e) => {
    this.setState({
      title: e.target.value
    });
  }

  render() {

    console.log(this.props);

    let body = (
      <div className="post card">
        <img src={RedPanda} alt="Red panda"/>
        <div className="card-content">
          <form onSubmit={this.handleSubmit}>
            <input type="text" value={this.state.title} onChange={this.handleChange}/>
          </form>
        </div>
      </div>
    )


    return (
      <div className="container upload">
        <h4 className="center">Upload content</h4>
        {body}
      </div>

    ) 
  }
}


const mapDispatchToProps = (dispatch) => {
  //The property we want to map to the component
  return {
    uploadPost: ( title ) => { dispatch(uploadPost(Math.random(), title)) }
  }
}

export default connect(null, mapDispatchToProps)(Upload);