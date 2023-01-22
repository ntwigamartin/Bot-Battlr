import React from 'react';

function MyBotsArmy({mybot, removeMyBot}){
    return (
        <div className='each-bot'>
            <img src={mybot.avatar_url} alt="Avatar Loading..." onClick={()=> removeMyBot()}/>
            <h5>{mybot.name}</h5>
            <p>{mybot.catchphrase}</p>
            <span>
                <p><i class="fa fa-heartbeat" aria-hidden="true"></i>{mybot.health}</p>
                <p><i class="fa fa-bolt" aria-hidden="true"></i>{mybot.damage}</p>
                <p><i class="fa fa-shield" aria-hidden="true"></i>{mybot.armor}</p>
            </span>
        </div>
    )
}

export default MyBotsArmy;