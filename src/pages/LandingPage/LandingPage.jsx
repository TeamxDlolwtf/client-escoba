import { useSelector,useDispatch } from "react-redux";
import { useState,useCallback } from "react";
import { setUserData } from "../../redux/actions-types";
import { useNavigate } from "react-router-dom";

export default function LandingPage(){
    const [name, setName] = useState();
    const socket = useSelector(state => state.socket);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleOnChage = (e) =>{
        const {value} = e.target
        setName(value);
    } 

    const handleOnClick = ()=>{
        socket.emit('createUser',{socketId: socket.id, name});
        dispatch(setUserData(name));
        navigate('/home')
    }
    

    return(
        <>
        <h1>LandingPage</h1>
        <label>Nick: <input type="text"  onChange={ (e)=> handleOnChage(e)} placeholder="Ingresar nombre"/></label>
        <button onClick={handleOnClick}>Ingresar</button>
        </>
    )
}