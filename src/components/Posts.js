import React, { Component } from 'react'

import {connect} from 'react-redux';

import {fetchPosts} from '../actions/postActions';


class Posts extends Component {
    constructor(props){
        super(props)
        this.state = {
            posts: []
        }
    }
    
    render() {
        // constructing a function that will iterate on each obj in post array ,then construct a JSX template
        const postItems = this.state.posts.map(post => (
            <div key={post.id}>
                <h3>{post.title}</h3>
                <p>{post.description}</p>
            </div>
        ))
        return (
            <div>
              <h1>Post</h1>  
              {/* Call postItems function here */}
              {postItems}
            </div>
        )
    }
}

export default connect(null,{ fetchPosts })(Posts);