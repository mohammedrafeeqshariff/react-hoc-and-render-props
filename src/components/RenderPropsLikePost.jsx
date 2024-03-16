import React, { useState } from 'react'

function RenderLikePost({count, incrementFunction}) {

  return (
    <div>
      <button onClick={incrementFunction}>Like Post {count}</button>
    </div>
  )
}

export default RenderLikePost