import React, {useState, useEffect, useReducer, useContext} from 'react';
import { Context } from "../App.context";
function stateReducer(state=[], action) {
    switch (action.type) {
        case 'insert' : return[...state,...action.payload]
        default : return state
    }
}

export default function State(props) {
    const [time, setTime] = useState(1)
    const [times, setTimes] = useState(11)
    const [name, setName] = useState('')
    const [fruits, dispatch] = useReducer(stateReducer, [])
    const ctx = useContext(Context)
    const {contextName} = ctx.user
    useEffect(()=>{
        //相当于生命周期的didMounted
        document.title = name
        console.log("关联了name修改")
        //相当于生命周期的销毁
        return function(){
            console.log('END')
        }
    },[name])
    return (
        <div>
            {time}
           <div onClick={()=>{setTime(time+1)}}>set</div>
           {times}
           <div onClick={()=>{setTimes(times+1)}}>set</div>
           {name}
           
           <input value={name} onChange={event =>
            setName(event.target.value)} />
            <div onClick={()=>dispatch({type:"insert",payload:'x'})}>dispatch</div>
            {fruits.map((item, index)=>{
                return <div key={index}>{item}</div>
            })}
            <div>{contextName}</div>
        </div>
         )
}