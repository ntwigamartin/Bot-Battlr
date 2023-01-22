import React from 'react';

function MyBotsArmy({mybot, removeMyBot}){
    return (
        <div className='each-bot'>
            <img src={mybot.avatar_url} alt="Avatar Loading..." onClick={()=> removeMyBot()}/>
            <h5>{mybot.name}</h5>
            <p>{mybot.catchphrase}</p>
            <span>
                <p>{mybot.health}</p>
                <p>{mybot.damage}</p>
                <p>{mybot.armor}</p>
            </span>
        </div>
    )
}

export default MyBotsArmy;