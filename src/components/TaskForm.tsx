import { FC, useState } from 'react'
import { TaskFormProps } from '../types'
import { Button } from './Button'
import { TextArea } from './Input'

export const TaskForm: FC<TaskFormProps> = ({ defaultValue = '', handleClick }) => {
  const [taskDescription, setTaskDescription] = useState(() => defaultValue)

  return (
    <form onSubmit={e => e.preventDefault()}>
      <TextArea
        placeholder='Task Description'
        value={taskDescription}
        onChange={e => setTaskDescription(e.target.value)}
      />
      <Button
        onClick={() => {
          handleClick(taskDescription.trim())
          setTaskDescription('')
        }}
        type='button'
      >
        {defaultValue === '' ? 'Add Task' : 'Save'}
      </Button>
    </form>
  )
}
