import React,{useState} from "react";
import Counter from './counter'

const CountersList = () => {
    const initialState = [
        {id:0,value:0,name:"Ненужная вещь"},
        {id:1,value:0,name:"Ложка"},
        {id:2,value:0,name:"Вилка"},
        {id:3,value:0,name:"Тарелка"},
        {id:4,value:0,name:"Набор минималиста"}
    ]
    
    const [counter,setCounters] = useState(initialState)
    const heandleDelete = (id) =>{
        const newCounters = counter.filter((counter)=>counter.id!==id)
        setCounters(newCounters)
        
    }
    const heandleReset =  ( ) => {
        setCounters(initialState)
        console.log('heandlereset')
    }
    
    const heandleSumm = (id) => {
        const searchIndex = counter.findIndex((item)=>item.id===id)
        const newCounter = [...counter]
        newCounter[searchIndex].value+=1
        setCounters(newCounter)
    }
    
    const heandleDecrement = (id) => {
        const find = counter.findIndex((item)=>{
            
            if(item.id === id)
            return [item.id]
        })
        const decCounter = [...counter]
        decCounter[find].value-=1
        setCounters(decCounter)
        
    }
    
   

   
return (<>
    {counter.map((count)=>
    (<Counter 
    counter={count}
    {...count}
    onDelete={heandleDelete} onIncrement={heandleSumm} onDecrement={heandleDecrement}/>))}
    <button className="btn btn-primary btn-sm m-2" onClick={heandleReset}>Сброс</button>
    </>
    )
}
export default CountersList