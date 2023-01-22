import React, {useEffect, useState} from "react";
import BotsCollection from "./BotsCollection";
import MyBotsArmy from "./MyBotsArmy";

function BotsData() {
    
    const [bots, setBots] = useState([])

    useEffect(() => {
        fetch("https://ntwigamartin.github.io/Bot-Battlr-data/db.json")
        .then(res => res.json())
        .then(data => {setBots(data.bots)})
    },[])
    
    const botsEement = bots.map(bot => {
        return <BotsCollection 
        key={bot.id} 
        bot={bot}/>
    })
    
    return (
        <div className="bots-containers">
            <div className='bots-collection'>
            {botsEement}
            </div>
            <div>
            <MyBotsArmy />
            </div>
            
        </div>
    )
}

export default BotsData;