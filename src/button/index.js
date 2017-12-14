import React from 'react'

const Button = (
  {
    children,
    properties,
    extraClass
  }
) => (
  <button className={'button ' + extraClass} {...properties}>
    {/* language=CSS */}
    <style jsx>{`
      .button {
        background-color: green;
        color: white;
        padding: 4px 10px;
        font-size: 14px;
        border: none;
        border-radius: 4px;
      }
    `}</style>
    {children}
  </button>
)

export {Button}
