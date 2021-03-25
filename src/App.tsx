import React, { useState } from 'react';

function Count () {
    const [count, setCount] = useState<number>(0);

    const inc = () => setCount(count+1);
    const dec = () => setCount(count-1);

    return (
        <div>
            <p>Count: {count}</p>
            <button onClick={inc}>+</button>
            <button onClick={dec}>-</button>
        </div>
    )
}

export default function App () {
    return (
        <div>
            <h1>APP</h1>
            <Count />
        </div>
    );
}
