// states in turnstile 
//  1. Locked 
//  2. Unlocked
function reducer(prevState, action) {
    switch (action.type) {
        case "insertCoin":
            var newState = {
                type: "unlocked",
                totalCoins: prevState.totalCoins + 1,
                insertedCoinValue: action.coinValue
            };
            return newState;
        case "push":
            if (prevState.type === 'unlocked') {
                var newState_1 = {
                    type: "locked",
                    totalCoins: prevState.totalCoins
                };
                return newState_1;
            }
            break;
    }
}
