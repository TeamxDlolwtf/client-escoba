//types

export const SET_USER_DATA = "SET_USER_DATA";
export const SET_USERS_LIST = "SET_USERS_LIST";


//actions

export function setUserData(userData){
    return {
        type: SET_USER_DATA,
        payload: userData
    }
}


export function setUsersLists(userList){
    return {
        type: SET_USERS_LIST,
        payload: userList
    }
}