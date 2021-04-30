import React from 'react'
import useCounter from './hooks/useCounter';

const CounterApp = () => {
    const [counter, increment, reset] = useCounter(0);
    
    return (
        <div>
            <h1>Clicks: {counter}</h1>
            <button >
                Increment
            </button>
            <button >
                Reset
            </button>
        </div>
    )
}

export default CounterApp