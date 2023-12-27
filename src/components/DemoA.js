import React, {memo} from 'react'

function DemoA({handleDemoA}) {
  // console.log(handleDemoA.count)
  console.log("DemoA")
  return (
    <div>
      <h1>DemoA</h1>
    </div>
  )
}

export default memo(DemoA);
