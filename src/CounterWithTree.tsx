import './CounterWithTree.css'
import{ useEffect, useState, useContext } from 'react';
import { CountContext } from './CountContext';

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
            <Button handleClick={handleClick}/>
            <Message />
            </CountContext.Provider>
        </div>
        
    )
}

function Button({ handleClick }: {
    handleClick: React.MouseEventHandler
}) {

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

