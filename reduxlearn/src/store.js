import { createStore } from 'redux';
//initial State
const initialState = {
    user: {
        username : "Gamana",
        balance: 25000
    }
}

//Action
export const addMoney = () => ({
    type: "addMoney",
    payload: amt
})

//reducer State
function reducer(state = initialState, action) {
    switch(action.type) {
        case 'addMoney':
            return {
                user : {
                    username : state.user.username,
                    balance: state.user.balance + action.payload
                }
            };
            default:
                return state;
    }
}

const store = createStore(reducer);
export default store;
