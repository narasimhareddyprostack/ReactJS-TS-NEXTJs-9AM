import React, { Component } from 'react'

 class Login extends Component {
    constructor(props){
        super(props);
        console.log("First Constructor")
    }
    render() {
    console.log("Second - Render Method")
    return <div>Login Comonent</div>

    }
}

export default Login