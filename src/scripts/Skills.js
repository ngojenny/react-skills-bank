import React from 'react';

const Skills = (props) => {
    console.log('skills', props);
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