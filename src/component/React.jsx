import { useState } from "react"

export function React() {
    let [count, setCount] = useState(0)

    return (
        <>
        <h1>this is a counter app</h1>
        <h1>value of count is: {count}</h1>
        <button onClick={() => setCount(count + 1)}>
            Increment
        </button>
        <button onClick={() => setCount(count - 1)}>
            Decrement
        </button>
        <button onClick={() => setCount(0)}>
            Reset
        </button>
        </>
    )
}