import './CounterWithTree.css'
import{ useEffect, useState } from 'react';

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
            <Button handleClick={handleClick}/>
            <Message count={count}/>
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

function Message({count} : {
    count: number
}) {

    return (
        <div>
            <p>You have clicked the yellow button: <CounterValue count={count}/> times</p>
        </div>
    )
}

function CounterValue({count} : {
    count: number
}) {
    return (
        <span>{count}</span>
    )
}

