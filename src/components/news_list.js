import React from "react";

const nameList = (props) => {

    console.log(props);

    const person = props.name.map((each) => (
        <div key={each.id}>
            <h3>First Name : {each.firstName}</h3>
            <h4>Last Name : {each.lastName}</h4>
        </div>
    ))

    return <>
        {person}
    </>
}

export default nameList;