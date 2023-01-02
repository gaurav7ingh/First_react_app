import React from "react";
import PerPerson from "./per_person";

const nameList = ({name}) => {

    const person = name.map((each) => (
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