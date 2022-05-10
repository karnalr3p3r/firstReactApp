import React, { Component } from 'react';

const name = 'Jacob';
const greeting = "Hello Jacob";
const loggedIn = true;

export default class App extends Component {
    render() {
        return ( <
            div className = 'app' >
            <
            h1 > { name } < /h1>  <
            h2 > { loggedIn ? greeting : 'Not logged in' } < /h2>  <
            /div>
        );
    }
}