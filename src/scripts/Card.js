import React from 'react';
import Skills from './Skills';



const Card = (props) => {
    return (
<div className="individual-card">
    <div className="team-member-identifier">
        <img src={props.details.imgUrl} alt={props.details.name} />
    </div>
    <div className="team-member-info">
        <h2>{props.details.name}</h2>
        <h3>{props.details.title}</h3>
        <Skills details={props.details.skills} className={props.tagName}/>
    </div>
</div>
    )
}

export default Card;