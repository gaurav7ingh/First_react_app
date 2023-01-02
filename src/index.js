import React, { Component } from 'react';
import { createRoot } from 'react-dom/client';
import './styles/style.css';
import JSON from "./styles/db.json";

import Header from './components/header';
import NameList from './components/person_list';

class App extends Component {

    state = {
        person: JSON,
        filetred : JSON
    }

    getKeywords = (event) => {
        const value = event.target.value;
        let filetredItem = this.state.person.filter((each) => {
            return each.firstName.indexOf(value) > -1;
        })

        this.setState({
            filetred : filetredItem
        })
    }

    render() {

        const { filetred } = this.state;

        return <>
            <Header 
                keyword = {this.getKeywords}    
            />
            <NameList
                name={filetred}
            />
        </>;

    }
}



createRoot(document.getElementById("root")).render(<App />);