import { useSelector } from "react-redux";
import styled from "./partyrequest.module.css";

export default function PartyRequest({handleChangeState,owner}){
    const socket = useSelector(state => state.socket);

    const handleJoinRoom = () => {
        socket.emit('joinRoom',owner.socketId);
        handleChangeState();
    }

    const handleReject = () =>{
        handleChangeState();
        socket.emit('RejectParty',owner.socketId);
    }

    return (
        <section className={styled.container}>
            <p className={styled.text}>Has sido invitado a la party por: {owner.name}</p>
            <button className={styled.createBtn} onClick={handleJoinRoom}>Aceptar</button>
            <button className={styled.createBtn} onClick={handleReject}>Rechazar</button>
        </section>
    )
}