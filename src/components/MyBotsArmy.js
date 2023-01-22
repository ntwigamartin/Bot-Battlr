import React from 'react';

function MyBotsArmy({mybot}){
    return (
        <div className='each-bot'>
            <img src={mybot.avatar_url} alt="Avatar Loading..." />
            <h5>{mybot.name}</h5>
            <p>{mybot.catchphrase}</p>
            <span>
                <p>{mybot.health}</p>
                <p>{mybot.damage}</p>
                <p>{mybot.armor}</p>
            </span>
            <button>X</button>
        </div>
    )
}

export default MyBotsArmy;