import ListUsers from "../../components/ListUsers/ListUsers";
import CreateRoom from "../../components/CreateRooms/CreateRoom";
import ListRooms from "../../components/ListRooms/ListRooms";

export default function Home(){



    
    return(
        <>
        <h1>Home</h1>
        <article>
            <CreateRoom />
        </article>
        <section>
            <h2>Rooms:</h2>
            <ListRooms/>
        </section>
        <aside>
            <ListUsers />
        </aside>
        </>
    )
}