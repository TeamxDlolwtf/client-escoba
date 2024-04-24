import { useEffect,useState } from "react";
import { useSelector } from "react-redux";
import Room from "../Room/Room";
import styled from "./listrooms.module.css";

export default function ListRooms(){
    const [rooms, setRooms] = useState(null);

    const socket = useSelector(state => state.socket);
   
    
    
    useEffect(()=>{
        socket.emit('getListRooms');
        socket.on('updateListRooms',(listRomms)=>{
            setRooms(listRomms);
        })
        socket.on('kick',()=>{
            alert('Ha sido kickeado de la sala por el owner');
        })
        
        return ()=>{
            socket.off('updateListRooms');
            socket.off('kick');
        }
    },[]);

    const assingWithClass = (mode) => mode < 3 ? styled.containerSmall : styled.containerLarge;

    return(
        <main className={styled.container}>
            {
                rooms && rooms.length ? rooms.map((room,index)=>{
                    return(
                       <section className={assingWithClass(room.mode)} key={room.owner+index}>
                            <Room room={room} index={index}/>
                       </section>
                    );
                }) : <h2 className={styled.notfound}>No se encontraron salas disponibles</h2>
            }
        </main>
    )
}