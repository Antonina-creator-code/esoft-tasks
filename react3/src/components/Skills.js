import React, { useState, useEffect } from 'react';

const Skills = () => {
    const [showSkills, setShowSkills] = useState(false);

    const toggleSkills = () => {
        setShowSkills(!showSkills);
    };
    const [skillsData, setSkillsData] = useState( [
        { id: 1, name: "React", description: " - JavaScript-library", level: "20%" },
        { id: 2, name: "Python", description: " - Is an interpreted, object-oriented, high-level programming language with dynamic semantics", level: "51%" },
        { id: 3, name: "PostgreSQL", description: " - Is a powerful, open-sourse object-relational database system", level: "20%" },
        { id: 4, name: "CSS", description: " - Is the library for web and native user interfaces", level: "20%" },
    ]);
    const [futureSkills, setFutureSkills] = useState( [
        { id: 5, name: "Parsing", description: " - Is the library for web and native user interfaces", level: "10%" },
        { id: 6, name: "C#", description: " - Is the library for web and native user interfaces", level: "5%" },
        { id: 7, name: "API", description: " - Is the library for web and native user interfaces", level: "5%" },
        { id: 8, name: "Machine Learning", description: " - Is the library for web and native user interfaces", level: "10%" },
        { id: 9, name: "Docker", description: " - Is the library for web and native user interfaces", level: "0%" },
        { id: 10, name: "PHP", description: " - Is the library for web and native user interfaces", level: "20%" },
        { id: 11, name: "Laravel", description: " - Is the library for web and native user interfaces", level: "0%" },
        { id: 12, name: "WordPress", description: " - Is the library for web and native user interfaces", level: "0%" },
    ]);

    const halfLength = Math.ceil(futureSkills.length / 2);
    const futureSkillsColumn1 = futureSkills.slice(0, halfLength);
    const futureSkillsColumn2 = futureSkills.slice(halfLength);

    const [filteredCompetencies, setFilteredCompetencies] = useState(skillsData);

    const [filteredFutureSkillsColumn1, setFilteredFutureSkillsColumn1] = useState(futureSkillsColumn1);
    const [filteredFutureSkillsColumn2, setFilteredFutureSkillsColumn2] = useState(futureSkillsColumn2);
    const [newSkillName, setNewSkillName] = useState('');
    const [newSkillDescription, setNewSkillDescription] = useState('');
    const [newSkillLevel, setNewSkillLevel] = useState('');
    const handleAddSkill = () => {
        if (newSkillName && newSkillDescription && newSkillLevel) {
            const newSkill = {
                id: skillsData.length + 1,
                name: newSkillName,
                description: newSkillDescription,
                level: newSkillLevel,
            };
            setSkillsData((prevState) => [...prevState, newSkill]);
            setFutureSkills((prevState) => [...prevState, newSkill]);
            setNewSkillName('');
            setNewSkillDescription('');
            setNewSkillLevel('');
        }
    };
    const [filteredSkills, setFilteredSkills] = useState(skillsData);

    const handleDeleteSkill = (id) => {
        let filteredSkills;
        filteredSkills = skillsData.filter((skill) => skill.id !== id);
        const filteredFutureSkills = futureSkills.filter((skill) => skill.id !== id);
        setFilteredSkills(filteredSkills);
        setFutureSkills(filteredFutureSkills);
    };
    
    const handleFilteredCompetencies = (level, direction) => {
        let filtered;
        if (direction === '>') {
            filtered = skillsData.filter(
                (competency) => parseFloat(competency.level) > level
            );
        } else {
            filtered = skillsData.filter(
                (competency) => parseFloat(competency.level) < level
            );
        }
        setFilteredCompetencies(filtered);
        let filteredColumn1;
        let filteredColumn2;
        if (direction === '>') {
            filteredColumn1 = futureSkillsColumn1.filter(
                (skill) => parseFloat(skill.level) > level
            );
            filteredColumn2 = futureSkillsColumn2.filter(
                (skill) => parseFloat(skill.level) > level
            );
        } else {
            filteredColumn1 = futureSkillsColumn1.filter(
                (skill) => parseFloat(skill.level) < level
            );
            filteredColumn2 = futureSkillsColumn2.filter(
                (skill) => parseFloat(skill.level) < level
            );
        }
        setFilteredFutureSkillsColumn1(filteredColumn1);
        setFilteredFutureSkillsColumn2(filteredColumn2);
    };

    return (
        <div className="App">
            <div className="App-header">
                {showSkills && (
                    <div className="skills">
                        <div className="skills-container">
                            <div className="skills-column">
                                <div className="mySkillsNow">My Skills Now</div>
                                
                                
                                <div className="new-skill-form">
                                    <input
                                        type="text"
                                        placeholder="Skill Name"
                                        value={newSkillName}
                                        onChange={(e) => setNewSkillName(e.target.value)}
                                    />
                                    <input
                                        type="text"
                                        placeholder="Skill Description"
                                        value={newSkillDescription}
                                        onChange={(e) => setNewSkillDescription(e.target.value)}
                                    />
                                    <input
                                        type="text"
                                        placeholder="Skill Level"
                                        value={newSkillLevel}
                                        onChange={(e) => setNewSkillLevel(e.target.value)}
                                    />
                                    <button onClick={handleAddSkill}>Add Skill</button>
                                    {filteredSkills.map((skill) => (
                                        <div className="skill-card" key={skill.id}>
                                            <h3>{skill.name}</h3>
                                            <p>{skill.description}</p>
                                            <p>Level: {skill.level}</p>
                                            <button onClick={() => handleDeleteSkill(skill.id)}>Remove skill</button>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className="skills-column">
                                <div className="mySkillsNow">Future Skills</div>
                                <div className="future-skills-container">
                                    <div className="future-skills-column">
                                        {filteredFutureSkillsColumn1.map((skill) => (
                                            <div className="skill-card" key={skill.id}>
                                                <h3>{skill.name}</h3>
                                                <p>{skill.description}</p>
                                                <p>Level: {skill.level}</p>
                                                <button onClick={() => handleDeleteSkill(skill.id)}>Remove skill</button>
                                            </div>
                                        ))}
                                    </div>
                                    <div className="new-future-skill-form1">
                                        <input
                                            type="text"
                                            placeholder="Skill Name"
                                            value={newSkillName}
                                            onChange={(e) => setNewSkillName(e.target.value)}
                                        />
                                        <input
                                            type="text"
                                            placeholder="Skill Description"
                                            value={newSkillDescription}
                                            onChange={(e) => setNewSkillDescription(e.target.value)}
                                        />
                                        <input
                                            type="text"
                                            placeholder="Skill Level"
                                            value={newSkillLevel}
                                            onChange={(e) => setNewSkillLevel(e.target.value)}
                                        />
                                        <button onClick={handleAddSkill}>Add Skill</button>
                                    </div>

                                    <div className="future-skills-column">
                                        {filteredFutureSkillsColumn2.map((skill) => (
                                            <div className="skill-card" key={skill.id}>
                                                <h3>{skill.name}</h3>
                                                <p>{skill.description}</p>
                                                <p>Level: {skill.level}</p>
                                                <button onClick={() => handleDeleteSkill(skill.id)}>Remove skill</button>
                                            </div>
                                        ))}
                                    </div>
                                    <div className="new-future-skill-form2">
                                        <input
                                            type="text"
                                            placeholder="Skill Name"
                                            value={newSkillName}
                                            onChange={(e) => setNewSkillName(e.target.value)}
                                        />
                                        <input
                                            type="text"
                                            placeholder="Skill Description"
                                            value={newSkillDescription}
                                            onChange={(e) => setNewSkillDescription(e.target.value)}
                                        />
                                        <input
                                            type="text"
                                            placeholder="Skill Level"
                                            value={newSkillLevel}
                                            onChange={(e) => setNewSkillLevel(e.target.value)}
                                        />
                                        <button onClick={handleAddSkill}>Add Skill</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="filter-controls">
                            <button onClick={() => handleFilteredCompetencies(50, '>')}>
                                Show skills with level {'>'} 50%
                            </button>
                            <button onClick={() => handleFilteredCompetencies(50, '<')}>
                                Show skills with level {'<'} 50%
                            </button>
                        </div>
                    </div>
                )}
            </div>
            <button onClick={toggleSkills} className="show-skills-button">
                {showSkills ? 'Hide skills' : 'Show skills'}
            </button>
        </div>
    );
};

export default Skills;

