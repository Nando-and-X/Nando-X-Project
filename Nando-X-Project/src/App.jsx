import 'bootstrap/dist/css/bootstrap.min.css';
import CollapsibleNavbar from './components/Navbar';
import HomePage from './components/home-page';
import React from 'react';

function App() {
    // render the collapsible navbar and home page
    return (
        <div>
            <CollapsibleNavbar />
            <HomePage />
        </div>
    );
}

export default App
