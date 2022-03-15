import React from 'react'

export const Button: React.FC<React.ButtonHTMLAttributes<HTMLButtonElement>> = ({
  ...props
}) => {
  return (
    <button
      className='px-3 py-2 m-1 leading-none text-white rounded select-none active:shadow-none bg-gradient-to-br from-cyan-400 to-cyan-500 hover:shadow-md focus:shadow-md'
      {...props}
    />
  )
}

export const IconButton: React.FC<React.ButtonHTMLAttributes<HTMLButtonElement>> = ({
  className = '',
  ...rest
}) => {
  return (
    <button
      className={`inline-flex items-center justify-center w-8 h-8 m-1 border-0 rounded 
                hover:bg-neutral-100 hover:shadow focus:shadow active:bg-inherit leading-none ${className}`}
      {...rest}
    />
  )
}