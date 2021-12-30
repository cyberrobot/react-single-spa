import React from 'react'
import ReactDOM from 'react-dom'
import singleSpaReact from 'single-spa-react'

const Body: React.VFC = () => {
  return (
    <body
      style={{
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <div
        style={{
          width: '300px',
          height: '300px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          background: '#42b983',
          color: '#ffffff',
        }}
      >
        Body from React
      </div>
    </body>
  )
}

const lifecycles = singleSpaReact({
  React,
  ReactDOM,
  rootComponent: Body,
})

export const bootstrap = lifecycles.bootstrap
export const mount = lifecycles.mount
export const unmount = lifecycles.unmount
