import React, { InputHTMLAttributes, TextareaHTMLAttributes } from 'react'

export const Input: React.FC<InputHTMLAttributes<HTMLInputElement>> = ({ ...props }) => {
  return <input className='input' type='text' {...props} />
}

export const TextArea: React.FC<TextareaHTMLAttributes<HTMLTextAreaElement>> = ({
  ...props
}) => {
  return <textarea className='input' {...props} />
}
