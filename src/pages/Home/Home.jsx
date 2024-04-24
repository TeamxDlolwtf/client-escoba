import ListUsers from "../../components/ListUsers/ListUsers";
import ListRooms from "../../components/ListRooms/ListRooms";
import styled from "./home.module.css";
import { useState } from "react";

export default function Home(){



    
    return(
        <main className={styled.container}>
            <ListRooms className={styled.listRooms}/>
            <ListUsers className={styled.listUsers}/>
        </main>
    )
}