import React from 'react';
import SkillCard from './SkillCard';
class Skills extends React.Component {
    render() {
        const skills = this.props.skills;
        const skillCards = skills.map(skill => (
            <SkillCard
                name={skill.name}
            />
        ));
        return <div className="skills">{skillCards}</div>
    }
}
export default Skills;