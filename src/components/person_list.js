import React from "react";
import PerPerson from "./per_person";

const nameList = (props) => {

    const person = props.name.map((each) => (
        <PerPerson
            person={each}
            key={each.id}
        />
    ))

    return <>
        {person}
    </>
}

export default nameList;