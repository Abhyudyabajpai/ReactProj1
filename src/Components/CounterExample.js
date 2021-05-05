import React, {useState} from 'react';

function CounterExample(){
    const [count, setCount] = useState(0)

    return (
        <div>
            <h1>{count}
            </h1>
            <h2 onClick = {()=> setCount(count +1)}>
                Plus
            </h2>

            <h2 onClick = {()=> setCount(count -1)}>
                Minus
            </h2>
        </div>
    )
}

export default CounterExample