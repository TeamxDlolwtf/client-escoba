import { useSelector } from "react-redux";
import Player from "../Player/Player";
import styled from "./room.module.css";

export default function Room({room,index}){

const {users} = room.users;
const {owner,mode} = room;
const socket = useSelector(state => state.socket);



const isLimiteTrue = () =>{
    const limite = parseInt(mode) +1;
    if(limite === users.length){
       return  users.map((user)=>{
            return (
                <div key={user.socketId}>
                    <Player owner={owner} user={user}/>
                </div>
            )
        })
    } else {
        const componets = [];
        for(let i = 0 ; i < limite;i++){
            if(i < users.length){
                componets.push(
                    <div key={users[i].socketId}>
                    <Player owner={owner} user={users[i]}/>
                    </div>
                )
            } else {
                componets.push(
                    <div key={'asdjkasdj'+i}>
                    <Player owner={owner} user={{name:null}}/>
                    </div>
                )
            }
        }
        return componets
    }
}

const handleOnCloseClick = () => {
    socket.emit('deleteRoom');
}
    return(
        <div className={styled.containerList}> 
        <div className={styled.header}>
        <h4 className={styled.title}>Sala {index+1}</h4>
        <h5>Limite de Players: {parseInt(mode)+1}</h5>
        <button className={styled.close} onClick={handleOnCloseClick}>X</button>
        </div>
       
        <div className={styled.containerPlayerList}>
        {
            isLimiteTrue()
        }
        </div>
      </div>
    )
}



