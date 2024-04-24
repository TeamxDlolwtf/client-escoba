import { useEffect,useCallback,useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setUsersLists } from "../../redux/actions-types";
import User from "../User/User";
import styled from "./listusers.module.css";

export default function ListUsers(){
    const [listUsers, setListUsers] = useState(null);
    const socket = useSelector(state => state.socket);
    const dispatch = useDispatch();
    
    const setUsers = useCallback((users) => dispatch(setUsersLists(users)),[dispatch]);

    useEffect(()=>{

        socket.emit('getUsersLists');
        socket.on('updateListUsers',(users)=>{
            setListUsers(users)
            setUsers(users)
        })

        return ()=>{
            socket.off('updateListUsers');
        }
    },[setUsers,socket]);

    return(
        <aside className={styled.container}>
            <label className={styled.title}> Lista de usuarios </label>
            {
                listUsers && listUsers.length && listUsers.map((user) => {
                    return (
                        <section className={styled.containerList} key={user.socketId}>
                            <User user={user} />
                        </section>
                    )
                })
            }
        </aside>
    )
}