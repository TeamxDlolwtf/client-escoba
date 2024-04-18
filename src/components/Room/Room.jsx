import User from "../User/User"
import { useSelector } from "react-redux";

export default function Room({room,index}){

const {users} = room.users;
const {owner} = room;
const socket = useSelector(state => state.socket);

const handleOnJoinClick = () => {
    socket.emit('joinRoom',owner);
}

const handleOnPartClick = () => {
    socket.emit('partRoom',owner);
}

const handleOnCloseClick = () => {
    socket.emit('deleteRoom');
}
    return(
        <div> 
        <h4>Sala {index}</h4>
        <button onClick={handleOnJoinClick}>Join Room</button>
        <button onClick={handleOnPartClick}>Leave Room</button>
        <button onClick={handleOnCloseClick}>Close Room</button>

        <h5>{room.mode}</h5>
        <label>
            Users: {
               users &&  users.map((user)=>{
                    return (
                        <div key={user.socketId}>
                            <User user={user}/>
                        </div>
                    )
                })
            }
         </label>
      </div>
    )
}



