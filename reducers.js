import { actionTypes } from './store';

export const users = (oldState = null, newAction) => {
    switch (newAction.type) {
        case actionTypes.SET_USERS_DATA:
            return newAction.newUsers;
            break;
        case actionTypes.ADD_USERS_DATA:
            return [ newAction.newUser, ...oldState ];
            break;
        case actionTypes.EDIT_USERS_DATA:
            const updatedItems = oldState.map(item => {
                if (item.id === newAction.newUser.id) {
                    return { ...item, ...newAction.newUser }
                }
                return item
            })
            return updatedItems
            break;
        default:
            return oldState;
            break;
    }
}

export const admin = (oldState = null, newAction) => {
    switch (newAction.type) {
        case actionTypes.SET_ADMIN_DATA:
            return newAction.admin;
            break;
        case actionTypes.EDIT_ADMIN_DATA:
            return newAction.admin;
            break;
        default:
            return oldState;
            break;
    }
}

export const notes = (oldState = null, newAction) => {
    switch (newAction.type) {
        case actionTypes.SET_THIS_DAY_NOTE:
            return newAction.newNote;
            break;
        // case actionTypes.EDIT_ADMIN_DATA:
        //     return newAction.admin;
        //     break;
        default:
            return oldState;
            break;
    }
}
