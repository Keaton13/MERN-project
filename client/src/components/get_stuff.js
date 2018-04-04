import React, { Component } from 'react';
import axios from 'axios';
class GetStuff extends Component {
    componentDidMount(){
        axios.get('/api/get-stuff').then( resp => {
            console.log('Response from server:', resp);
        });

        axios.post('/api/get-user').then( resp => {
            console.log('Response from get user:', resp);
        })

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