import React from 'react';


const perPerson = ({person}) => {
    return <div>
        <h3>Name : {person.firstName + " " + person.lastName}</h3>
    </div>
}

export default perPerson;