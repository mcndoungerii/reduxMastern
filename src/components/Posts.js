import React, { Component } from 'react'
import PropTypes from 'prop-types';

import {connect} from 'react-redux';

import {fetchPosts} from '../actions/postActions';


class Posts extends Component {
    
    componentDidMount(){
        this.props.fetchPosts();
    }

    UNSAFE_componentWillReceiveProps(nextProps){
        if(nextProps.newPost){
            this.props.posts.unshift(nextProps.newPost)
        }
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
    posts: PropTypes.array.isRequired,
    newPost: PropTypes.object
}; 

const mapStateToProps = state => ({
    posts: state.posts.items,
    newPost: state.posts.item
});

export default connect(mapStateToProps,{ fetchPosts })(Posts);