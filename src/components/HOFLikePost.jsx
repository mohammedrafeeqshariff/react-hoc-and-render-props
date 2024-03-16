import React, { useState } from 'react'
import HofComponent from './HOFComponent'

function LikePost({count, incrementFunction}) {

  return (
    <div>
      <button onClick={incrementFunction}>Like Post {count}</button>
    </div>
  )
}

export default HofComponent(LikePost)