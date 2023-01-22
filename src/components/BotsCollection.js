import React from 'react';

function BotsCollection({bot}) {
    


    return (
        <div className='each-bot'>
            <img src={bot.avatar_url} alt="Avatar Loading..."/>
            <h5>{bot.name}</h5>
            <p>{bot.catchphrase}</p>
            <span>
                <p>{bot.health}</p>
                <p>{bot.damage}</p>
                <p>{bot.armor}</p>
            </span>
            <button>X</button>
        </div>
    )
}

export default BotsCollection;