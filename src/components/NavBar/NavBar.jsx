import logo from "../../assets/logo.png"
import styled from "./navbar.module.css";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import CreateRoom from "../CreateRooms/CreateRoom";
import PartyRequest from "../PartyRequest/PartyRequest";

export default function NavBar(){
    const [isVisible, setIsVisible] = useState(false);
    const [isModalInvite, setIsModalInvite] = useState(false);
    const [data, setData] = useState(null);
    const socket = useSelector(state => state.socket);

    const handleChangeState = () => {
        setIsVisible(!isVisible);

    }

    const handleChangeInvite = () => {
        setIsModalInvite(!isModalInvite);
    }

    const handleSetInvite = (owner) => {
        setData(owner);
    }
    
    useEffect(()=>{
        socket.on('sendInvite',(findOwner)=>{
            handleSetInvite(findOwner)
            handleChangeInvite()
        })

        return ()=>{
            socket.off('sendInvite');
        }
    },[socket]);

    const viewInviteModal = (isModalInvite) => {
        if(isModalInvite) return(
            <section className={styled.containerModalInvite}>
                <button onClick={handleChangeInvite} className={styled.closeModal}>X</button>
                <PartyRequest handleChangeState={handleChangeInvite} owner={data}/>
            </section> 
        )
        return <></>
    }

    const viewModal = (isVisible)=>{
        if(isVisible) return (
            <section className={styled.containerModal}>
                <button onClick={handleChangeState} className={styled.closeModal}>X</button>
                <CreateRoom handleChangeState={handleChangeState}/>
            </section> 
            ) 
            return <></>
    }

   return <>
    
    {
        viewModal(isVisible)
    }
    {
        viewInviteModal(isModalInvite)
    }
     (<header className={styled.containerNav}>
        <img  className={styled.logo} src={logo} alt="logo de la paguina" />
        <nav className={styled.Options}>
            <ul>
                <li>Inicio</li>
                <li onClick={handleChangeState} >Crear sala</li>
                <li>Salas</li>
                <li>Perfil</li>
            </ul>
        </nav>
    </header>)
    </>
}