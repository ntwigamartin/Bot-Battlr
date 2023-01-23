import React from 'react';

function BotsCollection({bot, AddMyBot}) {

    return (
        <div className='each-bot' onClick={()=> AddMyBot(bot)}>
            <img src={bot.avatar_url} alt="Avatar Loading..."/>
            <h5>{bot.name}</h5>
            <p>{bot.catchphrase}</p>
            <span>
                <p><i className="fa fa-heartbeat" aria-hidden="true"></i>{bot.health}</p>
                <p><i className="fa fa-bolt" aria-hidden="true"></i>{bot.damage}</p>
                <p><i className="fa fa-shield" aria-hidden="true"></i>{bot.armor}</p>
            </span>
            <button>X</button>
        </div>
    )
}

export default BotsCollection;