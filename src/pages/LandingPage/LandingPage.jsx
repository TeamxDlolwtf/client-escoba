import { useSelector,useDispatch } from "react-redux";
import { useState } from "react";
import { setUserData } from "../../redux/actions-types";
import { useNavigate } from "react-router-dom";
import styled from "./landing.module.css";
import logo from "../../assets/logo.png";
import arrow from "../../assets/arrow-right.svg";

export default function LandingPage(){
    const [name, setName] = useState();
    const socket = useSelector(state => state.socket);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleOnChange = (e) =>{
        const {value} = e.target
        setName(value);
    } 

    const handleOnClick = ()=>{
        socket.emit('createUser',{socketId: socket.id, name});
        dispatch(setUserData(name));
        navigate('/home')
    }
    

    return(
        <section className={styled.pageContainer}>
        <img src={logo} alt="logo de la paguina" className={styled.logo}>
        </img>
        <div className={styled.container}>
        <label>Nick</label>
        <div  className={styled.containerInput}>
        <input type="text"  onChange={ (e)=> handleOnChange(e)} placeholder="Ingresar nombre"/>
        <img className= {styled.btn_arrow} onClick={handleOnClick} src={arrow} alt="ingresar a la app" />
        </div>
        </div>
        </section>
    )
}