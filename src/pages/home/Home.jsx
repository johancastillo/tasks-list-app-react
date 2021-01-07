import React, {Component} from 'react';
import axios from 'axios';

class Home extends Component{

    state = {
        title: 'My Client App',
        dogs: []
    }
    
    componentDidMount(){
        axios.get('https://dog.ceo/api/breeds/image/random')
        .then(
            response => {
                this.setState({ dogs: [response.data] })
                console.log(response.data)
            }
        ).catch(
            error => console.log(error)
        )
    }
    
    render(){
        return (
            <>
                <h1>{ this.state.title }</h1>
                
                {this.state.dogs.map(
                    e => <img src={e.message} alt="Dog" />
                )}

                
            </>
        )
    }
}

export default Home;