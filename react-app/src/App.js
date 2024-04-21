import React, { useState } from 'react';
import './App.css';
import BigCard from './components/BigCard';
import Confetti from './components/Confetti';

function App() {
    const [showFlower, setShowFlower] = useState(true);
    const toggleFlower = () => {
        setShowFlower(!showFlower);
    };
    const [showSkills, setShowSkills] = useState(false);
    const toggleSkills = () => {
        setShowSkills(!showSkills);
    };
    const skillsData = [
        { id: 1, name: "React" },
        { id: 2, name: "Python" },
        { id: 3, name: "PosgreSQL" },
        { id: 4, name: "CSS" },
    ];
    const futureSkills = [
        { id: 5, name: "Parsing" },
        { id: 6, name: "C#" },
        { id: 7, name: "API" },
        { id: 8, name: "Machine Learning" },
        { id: 9, name: "Docker" },
        { id: 10, name: "PHP" },
        { id: 11, name: "Laravel" },
        { id: 12, name: "Wordpress" }
    ];

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
                        <div className="petal"></div>
                        <div className="petal"></div>
                        <div className="petal"></div>
                        <div className="petal"></div>
                        <div className="petal"></div>
                        <div className="center"></div>
                    </div>
                )}
                {showSkills && (
                    <div className="skills">
                        <div className="skills-container">
                            <div className="skills-column">
                                <div className="mySkillsNow">My Skills Now</div>
                                {skillsData.map(skill => (
                                    <div className="skill-card" key={skill.id}>{skill.name}</div>
                                ))}
                            </div>

                            <div className="futureSkills-container">
                                <div className="futureSkills-column">
                                    <div className="myFutureSkills">My Future Skills</div>
                                    {futureSkillsColumn1.map(skill => (
                                        <div className="futureSkills" key={skill.id}>{skill.name}</div>
                                    ))}
                                </div>
                                <div className="futureSkills-column">
                                    {futureSkillsColumn2.map(skill => (
                                        <div className="futureSkills" key={skill.id}>{skill.name}</div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
            <button onClick={toggleFlower} className="flower-toggle-button">
                {showFlower ? 'Hide flower' : 'Show flower'}
            </button>
            <button onClick={toggleSkills} className="show-skills-button">
                {showSkills ? 'Hide skills' : 'Show skills'}
            </button>
        </div>
    );
}

export default App;

