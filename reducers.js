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
