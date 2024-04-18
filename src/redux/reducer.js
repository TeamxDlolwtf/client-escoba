import Socket from "../socket/socket"
import { SET_USER_DATA , SET_USERS_LIST } from "./actions-types"

const initialState = {
    userData : null,
    usersList: [],
    socket: Socket
}


export default function reducer(state = initialState , {types,payload}){
    switch(types){
        case SET_USER_DATA:
            return {
               ...state, userData: {name: payload.name} 
            }
        case SET_USERS_LIST: 
            return {
                ...state,
                usersList: [...payload]
            }
        default: 
        return {
            ...state
        }

    }
}

