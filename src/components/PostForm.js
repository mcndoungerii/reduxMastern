import React, { Component } from 'react'

class PostForm extends Component {
    constructor(props){
        super(props);
        this.state = {
            title: '',
            body:''
        }

        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }
    onChange(e){
        this.setState({[e.target.name]: e.target.value})
    }
    onSubmit(e){
        e.preventDefault();
        const postData = {
            title: this.state.title,
            body: this.state.body
        }
        fetch('https://jsonplaceholder.typicode.com/posts',{
            method:'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body: JSON.stringify(postData)
        })
        .then(res => res.json())
        .then(data => console.log(data));
    }
    render() {
        return (
            <div>
                <h1>Add Post</h1>
                <form onSubmit={this.onSubmit}>
                    <div>
                        <label>Title</label>
                        <br/>
                        <input type="text" name="title" onChange={this.onChange} value={this.state.title}></input>
                    </div>
                    <br/>
                    <div>
                        <label>Body</label>
                        <br/>
                        <textarea name="body" onChange={this.onChange} value={this.state.body}></textarea>
                    </div>
                    <br/>
                    <button type="submit">Submit</button> 
                </form>
            </div>
        )
    }
}
export default PostForm;