import React, { useState } from 'react';
const Flower = () => {
    const [showFlower, setShowFlower] = useState(true);
    const toggleFlower = () => {
        setShowFlower(!showFlower);
    };
    
    return (
        <div className="App">
            <div className="App-header">
                {showFlower && (
                    <div>
                        <div className="petal"></div>
                        <div className="petal"></div>
                        <div className="petal"></div>
                        <div className="petal"></div>
                        <div className="petal"></div>
                        <div className="center"></div>
                    </div>
                )}
            </div>
            <button onClick={toggleFlower} className="flower-toggle-button">
                {showFlower ? 'Hide flower' : 'Show flower'}
            </button>

        </div>
    );
}
export default Flower;