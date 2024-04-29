import React from 'react';
import './App.css';
import BigCard from './components/BigCard';
import Skills from './components/Skills';
import Flower from './components/Flower';

function App() {
    
    return (
        <div className="App">
            <div className="App-header">
                
                <BigCard />
                <Flower />

                <Skills />
            </div>
        </div>
    );
}

export default App;

