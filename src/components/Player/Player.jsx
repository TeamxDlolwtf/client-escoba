import defaultProfile from "../../assets/icon.png";
import defaultProfileJoin from "../../assets/addUsuario.png";
import styled from "./player.module.css";
import { useSelector } from "react-redux";
export default function Player({user,owner}){
    const socket = useSelector(state => state.socket);

    const name = user.name;
    const profile = user.img ||  defaultProfile;

    const handleOnPartClick = () => {
        if(owner === socket.id){
            const targetId = user.socketId;
            socket.emit('kick',targetId);
        } else {
            socket.emit('partRoom',owner);
        }
    }
    const handleOnJoinClick = () => {
        socket.emit('joinRoom',owner);
    }

   

    const isDataTrue = () => {
        if(name){
            return (
                <>
                <img className={styled.profile}  onClick={ handleOnPartClick} src={profile} alt={`imagen del usuario: ${name}`} />
                <h4 className={styled.name}>{name}</h4>
                </>
            )
        } else {
           return(
                <>
                <img className={styled.profileJoin} onClick={handleOnJoinClick} src={defaultProfileJoin} alt={`imagen para unirse a la sala`} />
                <h4 className={styled.name}>Unirse</h4>
                </>
            )
        }
    }
    return (
    <div className={styled.container}>
            {
                isDataTrue()
            }
    </div>
    )
}