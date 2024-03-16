import React,{useState} from 'react'

export default function RenderProps({render}) {

    const [count, setCount] = useState(0)

    const incrementFunction = ()=>{
      setCount(count+1);
    }

  return (
    <div>
      {render(count, incrementFunction)}
    </div>
  )
}
