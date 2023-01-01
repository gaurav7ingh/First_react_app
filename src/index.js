import React from 'react';
import { createRoot } from 'react-dom/client';
import './styles/style.css';

import Header from './components/header';

const App = () => (
    <>
        <Header/>
    </>
)



createRoot(document.getElementById("root")).render(<App />);