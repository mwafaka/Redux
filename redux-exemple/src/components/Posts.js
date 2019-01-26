import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { fetchPosts } from "../action/postAction";
export class Posts extends Component {
  componentWillMount() {
    this.props.fetchPosts();
  }
  render() {
    const postItem = this.props.posts.map(post => (
      <div key={post.id}>
        <h3>{post.title}</h3>
        <p>{post.body}</p>
      </div>
    ));
    return (
      <div>
        <h1>Post</h1>
        {postItem}
      </div>
    );
  }
}
Posts.propTypes = {
  fetchPosts: PropTypes.func.isRequired,
  posts: PropTypes.array.isRequired
};
const mapStateToProps = state => ({
  posts: state.posts.items
});

export default connect(
  mapStateToProps,
  { fetchPosts }
)(Posts);
