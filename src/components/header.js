import React from "react";

const Header = (props) => {

    const compo = <header>
        <div>Logo</div>
        <input onChange={props.keyword} />
    </header>;

    return compo;


}



export default Header; 