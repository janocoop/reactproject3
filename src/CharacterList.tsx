import { useState } from "react"
import { response } from "./reactproject.ts";

function CharacterList(){
    const[data,setData]=useState([...response.results])

    return <div> {data.map((d, index) => {
        return <div>
            <p>{d.name}</p>
            <p>{d.gender}</p>
        </div>

    }) }</div>

}

export default CharacterList;