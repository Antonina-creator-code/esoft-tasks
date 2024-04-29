import React from 'react';
class SkillCard extends React.Component {
    render() {
        const { list, name, description, level } = this.props;
        return (
            <div>
                <div className="skill-card">
                    <h3>{list}</h3>
                    <p>{name}</p>
                    <p>{description}</p>
                    <p>{level}</p>
                </div>
            </div>
        );
    }
}
export default SkillCard;