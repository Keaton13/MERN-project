import React, { Component } from 'react';
import axios from 'axios';
class GetStuff extends Component {
    componentDidMount(){
        axios.get('http://localhost:9000/api/get-stuff').then( resp => {
            console.log('Responce from server:', resp);
        });
    }
    render(){
        return(
            <div>
                <h1>Get Stuff</h1>
            </div>
        )
    }
}

export default GetStuff;