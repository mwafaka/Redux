import React, { Component } from "react";

export class Postform extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <h1>Add posts</h1>
        <div>
          <label>Title:</label>
          <input type="text" name="title" />
        </div>
        <br />
        <div>
          <label>Body:</label>
          <br />
          <textarea name="body" />
        </div>
        <br />
        <button type="submit">Submit</button>
      </div>
    );
  }
}

export default Postform;
