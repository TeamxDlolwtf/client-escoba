import { useEffect,useState } from "react";
import { useSelector } from "react-redux";
import Room from "../Room/Room";

export default function ListRooms(){
    const [rooms, setRooms] = useState(null);
    const socket = useSelector(state => state.socket);
   
    

    
    useEffect(()=>{
        socket.emit('getListRooms');
        socket.on('updateListRooms',(listRomms)=>{
            setRooms(listRomms);
        })

        return ()=>{
            socket.off('updateListRooms');
        }
    },[]);

    return(
        <section>
            {
                rooms && rooms.length && rooms.map((room,index)=>{
                    return(
                       <div key={room.owner+index}>
                            <Room room={room} index={index}/>
                       </div>
                    );
                })
            }
        </section>
    )
}