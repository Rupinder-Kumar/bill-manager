import * as ActionTypes from './Types';

export const getCategories = (payload) => {
    return dispatch => {
         dispatch(loadCategories(payload))
    }
}

export const addBill= payload => {
    return dispatch => {
        dispatch(addBillDetails(payload.formData))
        dispatch(getBills())
    }
}

export const deleteBill = (id) => {
    return dispatch => {
        dispatch(deleteBillDetails(id))
        dispatch(getBills())
    }
}

export const getBills = payload => ({
    type: ActionTypes.LOAD_BILL
})

const loadCategories = payload => ({
    type: ActionTypes.LOAD_CATEGORIES,
    payload
})

let id = 1;
const addBillDetails = payload => ({
    type: ActionTypes.ADD_BILL,
    id: id++,
    payload
})

const deleteBillDetails = id => ({
    type: ActionTypes.DELETE_BILL,
    id
})