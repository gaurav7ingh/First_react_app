import React, { Component } from "react";

class Header extends Component {

    onInput(event){
        console.log(event.target.value);
    }

    render() {
        return <header>
            <div className="logo">Logo</div>
            <input onChange={this.onInput}/>
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