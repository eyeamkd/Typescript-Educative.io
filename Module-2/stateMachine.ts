// states in turnstile 
//  1. Locked 
//  2. Unlocked

type State =  {type:"locked", totalCoins:number} | {type:"unlocked", insertedCoinValue:number, totalCoins:number} 

type Action = { type:"push" } | {type:"insertCoin", coinValue:number}

function turnstileReducer(prevState:State,action:Action):State{
    switch(action.type){
        case "insertCoin":  
            const newState:State = {
                type:"unlocked",
                totalCoins :  prevState.totalCoins + 1,
                insertedCoinValue:action.coinValue
            } 
            return newState;
        case "push": 
            if(prevState.type === 'unlocked'){
                const newState : State = {
                    type:"locked",
                    totalCoins:prevState.totalCoins
                } 
                return newState;
            } 
            return prevState;
    }
}