import React, { useState } from 'react'

function RenderLikeImage({count, incrementFunction}) {

  return (
    <div>
      <button onClick={incrementFunction}>Like Image {count}</button>
    </div>
  )
}

export default  RenderLikeImage