import React from 'react'

interface ButtonProps { 
    children: React.ReactNode,
    onClick?: React.MouseEventHandler<HTMLButtonElement>,
    search?: boolean,
    type?: 'submit'
}

function Button({ children, onClick, search }: ButtonProps) {
  return (
    <button className={`border border-white rounded-full px-4 sm:px-12 py-2 bg-white bg-opacity-0 transition-all hover:scale-110 hover:bg-opacity-10 ${ search ? 'self-end' : null }`} onClick={onClick}>
      { children }
    </button>
  )
}

export default Button
