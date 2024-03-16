import React, { useState } from 'react'
import HofComponent from './HOFComponent'

function LikeImage({count, incrementFunction}) {

  return (
    <div>
      <button onClick={incrementFunction}>Like Image {count}</button>
    </div>
  )
}

export default  HofComponent(LikeImage)