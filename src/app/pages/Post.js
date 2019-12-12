import React, { Component } from 'react'
import axios from 'axios';
import PostBody from '../components/Post';

export default class User extends Component {
    constructor(props) {
        super(props);
        this.state = {
            post: null
        }
    }
    
    render() {
        return (
            <div>
                {this.state.post && <PostBody {...this.state.post}/>}
            </div>
        )
    }

    componentDidMount() {
        axios.get(`https://jsonplaceholder.typicode.com/posts/${this.props.params.userId}`)
        .then(response =>{
            this.setState({post: response.data})
        })
    }
}
