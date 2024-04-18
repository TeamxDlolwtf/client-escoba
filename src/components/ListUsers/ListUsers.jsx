import { useEffect,useCallback,useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setUsersLists } from "../../redux/actions-types";


export default function ListUsers(){
    const [listUsers, setListUsers] = useState(null);
    const socket = useSelector(state => state.socket);
    const dispatch = useDispatch();
    
    const setUsers = useCallback((users) => dispatch(setUsersLists(users)));

    useEffect(()=>{

        socket.emit('getUsersLists');
        socket.on('updateListUsers',(users)=>{
            setListUsers(users)
            setUsers(users)
        })

        return ()=>{
            socket.off('updateListUsers');
        }
    },[]);

    return(
        <section>
            <label>Users: {listUsers && listUsers.length} </label>
            {
                listUsers && listUsers.length && listUsers.map((user) => {
                    return (
                        <div key={user.socketId}>
                            <p>{user.name}</p>
                        </div>
                    )
                })
            }
        </section>
    )
}