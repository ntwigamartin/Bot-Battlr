import React, {useEffect, useState} from "react";
import BotsCollection from "./BotsCollection";
import MyBotsArmy from "./MyBotsArmy";

function BotsData() {
    
    const [bots, setBots] = useState([])
    const [myBotsArmy, setMyBotsArmy] = useState([])

    useEffect(() => {
        fetch("https://ntwigamartin.github.io/Bot-Battlr-data/db.json")
        .then(res => res.json())
        .then(data => {setBots(data.bots)})
    },[])
    
    const botsElement = bots.map(bot => {
        return <BotsCollection 
        key={bot.id} 
        bot={bot}
        AddMyBot={AddMyBot}/>
    })
    
    function AddMyBot(item) {
        if (!myBotsArmy.includes(item)) {
            setMyBotsArmy(prevState => {
            return [...prevState, item]
            })
            }
        
        
        // setMyBotsArmy(prevState =>{
        //     return [...prevState, item]
        // })
    }

    const myBotElement = myBotsArmy.map((bot, index) => {
        return <MyBotsArmy 
        key={index}
        mybot={bot}
        removeMyBot={removeMyBot} />
    })

    function removeMyBot(element) {

        setMyBotsArmy(prevState => {
            return prevState.filter(bot => bot !== element);
        });
        
    }
    console.log(myBotsArmy);
    return (
        <div className="bots-containers">
            
            <div className='bots-collection'>
            {botsElement}
            </div>
            <div className="bots-collection">
            {myBotElement}
            </div>
            
        </div>
    )
}

export default BotsData;