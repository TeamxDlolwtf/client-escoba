import { useSelector } from "react-redux"
import { useState } from "react";
import styled from "./createroom.module.css";

export default function CreateRoom({handleChangeState}){
    const [mode,setMode] = useState(1);

    const socket = useSelector(state => state.socket);


    const handleOnChange = (e) => setMode(e.target.value);

    const handleOnClick = ()=>{
        socket.emit('createRoom',{mode,socketID:socket.id});
        handleChangeState();
    }

    return(
        <div className={styled.container}>
            <label>Cantidad de Players</label>
            <select className={styled.options} value={mode} onChange={(e) => handleOnChange(e)}>
                <option value="1">2 player</option>
                <option value="2">3 player</option>
                <option value="3">4 player</option>
            </select>
            <button className={styled.createBtn} onClick={handleOnClick}>Create Room</button>
        </div>
    )
}