import React, { useState } from 'react'

function HofComponent(WrappedComponent) {

    const NewComponent = ()=>{

        const [count, setCount] = useState(0)

        const incrementCount = ()=>{
          setCount(count+1);
        }

        return (
          <WrappedComponent count={count} incrementFunction={incrementCount}/>
        )

    }
    return NewComponent;
}

export default HofComponent
