import { actionType } from "./Actions";
import * as ActionTypes from "./Types";

const initialState = {
    bills: [],
    categories: []
}

const reducer = ( state = initialState, actionType ) => {
    
    console.log(actionType);
    switch(actionType.type) {

        case ActionTypes.LOAD_CATEGORIES:
                return { ...state, categories: actionType.payload }
        case ActionTypes.ADD_BILL:
                return { ...state, bills: [...state.bills, {id: actionType.id, ...actionType.payload}] }
        case ActionTypes.LOAD_BILL:
                return { ...state }
        case ActionTypes.DELETE_BILL:
                const numIndex = parseInt(actionType.id)
                let bills = state.bills.filter(bill => bill.id !== numIndex)
                return { ...state, bills: bills  }
        case ActionTypes.EDIT_BILL:
                const Index = parseInt(actionType.payload.id)
                return { ...state, bills: state.bills.map(bill => bill.id === Index ? actionType.payload : bill)  }
            default:
                return state;
        }

}

export default reducer;