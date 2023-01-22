import React from 'react';

function BotsCollection({bot, AddMyBot}) {

    return (
        <div className='each-bot'>
            <img src={bot.avatar_url} alt="Avatar Loading..." onClick={()=> AddMyBot(bot)}/>
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