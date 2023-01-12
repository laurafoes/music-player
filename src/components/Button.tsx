import React from 'react'

interface ButtonProps { 
    children: React.ReactNode,
    onClick?: React.MouseEventHandler<HTMLButtonElement>,
    search?: boolean,
    type?: 'submit' | 'delete'
}

function Button({ children, onClick, search, type }: ButtonProps) {
  return (
    <button className={`rounded-full py-2 ${ type === 'delete' ? 'px-2 border-none' : 'border border-white px-4 sm:px-12 border-none' }bg-white bg-opacity-0 transition-all hover:scale-110 hover:bg-opacity-10 ${ search ? 'self-end' : null }`} onClick={onClick}>
      { children }
    </button>
  )
}

export default Button
