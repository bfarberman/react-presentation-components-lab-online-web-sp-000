import React, { Component } from "react";

// Code SimpleComponent Here
class SimpleComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            mood: "happy"
        }
    }

    handleClick = () => {
        const laterMood = this.state.mood === "happy" ? "sad" : "happy"
        this.setState({ mood: laterMood}) 
    }

    render() {
    return <div onClick={this.handleClick}>{this.state.mood}</div>
    }

}

export default SimpleComponent