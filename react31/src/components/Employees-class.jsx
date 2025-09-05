import React, { Component } from 'react'

 class Employees extends Component {
    constructor(props){
        super(props);
        console.log("First Constructor")
    }
   
    componentDidMount(){
        console.log("After Render Method - component Did Mount")
    }
     componentDidUpdate(){
        console.log("updating state")
    }
    componentWillUpdate(){
        console.log("At the time of updating state")
    }
    componentWillUnmount(){
        console.log("At the time of unmounting")
    }
    render() {
        console.log("Second - Render Method")
        return <div>Employees Component</div>

    }
}

export default Employees