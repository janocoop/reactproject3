import {response} from"reactproject.tsx";



exportfunctionsetupCounter(element:HTMLButtonElement){
    letcounter=0
    constsetCounter=(count:number)=>{
        counter=count
        element.innerHTML=`countis${counter}`
    }
    element.addEventListener('click',()=>setCounter(counter+1))
    setCounter(0)
}
constaddData=()=>{
    constnewData=[...data,{id:data.length+1,value:"NeueDaten"}];
    setData(newData);

    return(
        <div>
            <buttononClick={addData}>Datenhinzufügen</button>
            <ul>
            {data.map(item=>(
                    <likey={item.id}>{item.value}</li>
                ))}
            </ul>
            </div>
    );
}