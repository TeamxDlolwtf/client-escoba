import { useSelector } from "react-redux"
import { useState } from "react";


export default function CreateRoom(){
    const [mode,setMode] = useState(1);

    const socket = useSelector(state => state.socket);


    const handleOnChange = (e) => setMode(e.target.value);

    const handleOnClick = ()=>{
        socket.emit('createRoom',{mode,socketID:socket.id});
    }
    return(
        <div>
            <select value={mode} onChange={(e) => handleOnChange(e)}>
                <option value="1">2 player</option>
                <option value="2">3 player</option>
                <option value="3">4 player</option>
            </select>
            <button onClick={handleOnClick}>Create Room</button>
        </div>
    )
}