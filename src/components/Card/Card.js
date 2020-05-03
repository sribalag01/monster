import React from 'react';
import '../../App.css'
function Card(props) {
    const { monster } = props;
    return (
        <div className="monsters">
            <h2>{monster.name}</h2>
            <img alt="dynamic_images" src={`https://robohash.org/${monster.id}?set=set4`}></img>
            <p>{monster.email}</p>
        </div>

    )


}


export default Card