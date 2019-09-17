import React from 'react';

const Friend = (props) => {
    return (
        <div className='friend-card'>
            <h3>{props.name} {props.delate}</h3>
            <p>{props.age}</p>
            <p>Email: {props.email}</p>
        </div>
    )
} 

export default Friend;