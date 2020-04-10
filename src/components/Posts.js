import React, { Component } from 'react'
import PropTypes from 'prop-types';

import {connect} from 'react-redux';

import {fetchPosts} from '../actions/postActions';


class Posts extends Component {
    
    componentDidMount(){
        this.props.fetchPosts();
    }
    
    render() {
        // constructing a function that will iterate on each obj in post array ,then construct a JSX template
        const postItems = this.props.posts.map(post => (
            <div key={post.id}>
                <h3>{post.title}</h3>
                <p>{post.description}</p>
            </div>
        ))
        return (
            <div>
              <h1>Post</h1>  
              {postItems}
            </div>
        )
    }

}

Posts.propTypes = {
    fetchPosts: PropTypes.func.isRequired,
    posts: PropTypes.array.isRequired
}; 

const mapStateToProps = state => ({
    posts: state.posts.items
});

export default connect(mapStateToProps,{ fetchPosts })(Posts);