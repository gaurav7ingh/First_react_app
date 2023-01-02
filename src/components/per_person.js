import React from 'react';


const perPerson = (props) => {
    return <div>
        <h3>Name : {props.person.firstName + " " + props.person.lastName}</h3>
    </div>
}

export default perPerson;