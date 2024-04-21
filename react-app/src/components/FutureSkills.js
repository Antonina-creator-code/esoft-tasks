import React from 'react';
class FutureSkills extends React.Component {
    render() {
        const { list, name } = this.props;
        return (
            <div>
                <div className="futureSkills">
                    <h3>{list}</h3>
                    <p>{name}</p>
                </div>
            </div>
        );
    }
}
export default FutureSkills;