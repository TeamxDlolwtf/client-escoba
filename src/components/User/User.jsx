import { useState } from "react";
import profileImg from "../../assets/user.png";
import styled from "./user.module.css";
import OptionUserList from "../OptionUserList/OptionUserList";
export default function User({user}){
const name = user.name;
const profile = user.img || profileImg;
const [isModal,setIsModal] = useState(false);

const handleChangeState = () => {
    setIsModal(!isModal);
}

const viewModal = (state) => {
    if(state){
        return (
           <OptionUserList target={user}/>
        )
    } else {

        return <></>
    } 
}
    return(
        <div onClick={handleChangeState} className={styled.container}>
            <img className={styled.profile} src={profile} alt={`imagen del usuario ${name}`}/>
            <h5>{name}</h5>
            { viewModal(isModal) }
        </div>
    )
}