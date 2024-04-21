import React, { useState } from 'react';
import './App.css';
import BigCard from './components/BigCard';
import Confetti from './components/Confetti';

function App() {
    const [showFlower, setShowFlower] = useState(true);
    const toggleFlower = () => {
        setShowFlower(!showFlower);
    };
    const skillsData = [
        { name: "React" },
        { name: "Python" },
        { name: "PosgreSQL" },
        { name: "CSS" },
    ];
    const futureSkills = [
        { name: "Parsing" },
        { name: "C#" },
        { name: "API" },
        { name: "Machine Learning" },
        { name: "Docker" },
        { name: "PHP" },
        { name: "Laravel" },
        { name: "Wordpress" }
    ]

    const halfLength = Math.ceil(futureSkills.length / 2);
    const futureSkillsColumn1 = futureSkills.slice(0, halfLength);
    const futureSkillsColumn2 = futureSkills.slice(halfLength);

    return (
        <div className="App">
            <div className="App-header">
                <BigCard />
                <Confetti />
                {showFlower && (
                    <div>
                        <div class="petal"></div>
                        <div class="petal"></div>
                        <div class="petal"></div>
                        <div class="petal"></div>
                        <div class="petal"></div>
                        <div class="center"></div>
                    </div>
                )}
                 
                <div className="skills">
                    <div className="skills-container">
                        <div className="skills-column">
                            <div className="mySkillsNow">My Skills Now</div>
                            {skillsData.map((skill, index) => (
                                <div className="skill-card" key={index}>{skill.name}</div>
                            ))}
                        </div>

                        <div className="futureSkills-container">
                            <div className="futureSkills-column">
                                <div className="myFutureSkills">My Future Skills</div>
                                {futureSkillsColumn1.map((skill, index) => (
                                    <div className="futureSkills" key={index}>{skill.name}</div>
                                ))}
                            </div>
                            <div className="futureSkills-column">
                                {futureSkillsColumn2.map((skill, index) => (
                                    <div className="futureSkills" key={index}>{skill.name}</div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
                <button onClick={toggleFlower} className="flower-toggle-button">
                    {showFlower ? 'Hide flower' : 'Show flower'}
                </button>
            </div>
        </div>
    );
}

export default App;
