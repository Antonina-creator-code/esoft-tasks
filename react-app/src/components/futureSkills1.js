import React from 'react';
class futureSkills extends React.Component {
    render() {
        const futureSkills = this.props.futureSkills;
        const FutureSkills = futureSkills.map(futureSkills => (
            <FutureSkills
                name={futureSkills.name}
            />
        ));
        return <div className="futureSkills">{FutureSkills}</div>
    }
}
export default futureSkills;