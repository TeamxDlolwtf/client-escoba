import styled from "./optionuserlist.module.css";
import { useSelector } from "react-redux";

export default function OptionUserList({target}){
    const socket = useSelector(state => state.socket);
    const handleInviteUser = () => {
         socket.emit('sendParty',target.socketId);
    }

    return (
        <section className={styled.container}>
            <ul className={styled.options}>
                <li onClick={handleInviteUser}>Invite</li>
            </ul>
        </section>
    )
}