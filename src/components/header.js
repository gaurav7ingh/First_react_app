import React, { Component } from "react";

class Header extends Component {

    state = {
        input: "",
        count: 0
    }

    onInput = (event) => {
        this.setState({
            input: event.target.value
        })
    }

    addOne = () => {
        this.setState((state, props) => ({
            count: state.count + 1
        }))
    }

    render() {
        return <header>
            <div className="logo">Logo</div>
            <input onChange={this.onInput} />
            <div>{this.state.input}</div>
            <div>{this.state.count}</div>
            <button onClick={()=>this.addOne()}>Add One</button>
        </header>
    }
}

// let styles = {
//     header: {
//         background: "#03f000"
//     },
//     logo: {
//         fontFamily: "Roboto",
//         color: "#fff"
//     }
// }

export default Header; 