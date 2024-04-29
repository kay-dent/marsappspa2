import './CounterWithTree.css'
import{ useEffect, useState, useContext } from 'react';
import { CountContext } from './CountContext';
import { HandleClickContext } from './HandleClickContext';

export default function CounterWithTree() {

    const [count, setCount] = useState(Number(localStorage.getItem("count-two")) || 0)

    useEffect(() => {
        localStorage.setItem("count-two", `${count}`)
      })
    
    function handleClick() {
        setCount(count + 1)
    }
    

    return (
        <div>
            <CountContext.Provider value={count}>
            <HandleClickContext.Provider value={handleClick}>
              <Button />
              <Message />
            </HandleClickContext.Provider>
            </CountContext.Provider>
        </div>
        
    )
}

function Button() {

    const handleClick = useContext(HandleClickContext);

    return (
        <button className={"button-two"} onClick={handleClick}></button>
    )
}

function Message() {

    return (
        <div>
            <p>You have clicked the yellow button: <CounterValue /> times</p>
        </div>
    )
}

function CounterValue() {
    const count = useContext(CountContext);
    return (
        <span>{count}</span>
    )
}

