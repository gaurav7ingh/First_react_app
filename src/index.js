import React, { Component } from 'react';
import { createRoot } from 'react-dom/client';
import './styles/style.css';
import JSON from "./styles/db.json";

import Header from './components/header';
import NameList from './components/person_list';

class App extends Component {

    state = {
        person: JSON
    }

    render() {

        const {person} = this.state;

        return <>
            <Header />
            <NameList
                name={person}
            />
        </>;

    }
}



createRoot(document.getElementById("root")).render(<App />);