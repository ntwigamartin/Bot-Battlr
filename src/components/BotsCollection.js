import React from 'react';

function BotsCollection({bot, AddMyBot}) {

    return (
        <div className='each-bot'>
            <img src={bot.avatar_url} alt="Avatar Loading..." onClick={()=> AddMyBot(bot)}/>
            <h5>{bot.name}</h5>
            <p>{bot.catchphrase}</p>
            <span>
                <p><i class="fa fa-heartbeat" aria-hidden="true"></i>{bot.health}</p>
                <p><i class="fa fa-bolt" aria-hidden="true"></i>{bot.damage}</p>
                <p><i class="fa fa-shield" aria-hidden="true"></i>{bot.armor}</p>
            </span>
            <button>X</button>
        </div>
    )
}

export default BotsCollection;