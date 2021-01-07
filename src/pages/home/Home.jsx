import React, {Component} from 'react';
import axios from 'axios';

class Home extends Component{
    
    componentDidMount(){
        axios.get('https://dog.ceo/api/breeds/image/random')
        .then(
            response => console.log(response.data)
        ).catch(
            error => console.log(error)
        )
    }
    
    render(){
        return (
            <h1>Hello World</h1>
        )
    }
}

export default Home;