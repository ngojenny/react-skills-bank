import React from 'react';

const Skills = (props) => {
    return (
        <ul>
            {
                props.details.map((skill, i) => {
                    return <li key={skill}>{skill}</li>
                })
            }

        </ul>
    )
}

export default Skills;