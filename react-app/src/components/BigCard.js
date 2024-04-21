import React from 'react';
import photo from './photo.png';
import Welcome from './Welcome';
class BigCard extends React.Component {
    render() {
        const name = "Molchanova Antonina Andreevna";
        return (
            <div className="cardAboutMe">
                <p>
                    <img src={photo} width={300} height={400} alt="myPhoto" />
                    <Welcome name={name} />
                </p>
            </div>
        )
    }
}
export default BigCard;