import { FC, useState } from 'react'
import { AiOutlineLock, AiOutlineUnlock } from 'react-icons/ai/index'
import { VscTrash, VscEdit } from 'react-icons/vsc/index'
import { useKanbanContext } from '../context/kanban-context'
import { CardProps } from '../types'
import { IconButton } from './Button'
import { TaskForm } from './TaskForm'

export const Card: FC<CardProps> = ({ listId, taskId, task }) => {
  const [toggleEdit, setToggleEdit] = useState(false)
  const { updateTask, deleteTask, handleDragStart, handleDragEnd } = useKanbanContext()

  const handleTaskUpdate = (description: string) => {
    updateTask(listId, taskId, description, task.locked)
    setToggleEdit(!toggleEdit)
  }

  return (
    <div
      draggable={!task.locked}
      onDragStart={e => handleDragStart(listId, taskId)}
      onDragEnd={e => handleDragEnd()}
      className='card'
    >
      {toggleEdit ? (
        <TaskForm defaultValue={task.description} handleClick={handleTaskUpdate} />
      ) : (
        <>
          <p className='mb-2'>{task.description}</p>
          <div className='flex justify-end'>
            <IconButton
              className='text-emerald-700'
              onClick={e => setToggleEdit(!toggleEdit)}
            >
              <VscEdit />
            </IconButton>
            <IconButton
              className='text-blue-700'
              onClick={() => updateTask(listId, taskId, task.description, !task.locked)}
            >
              {task.locked ? <AiOutlineLock /> : <AiOutlineUnlock />}
            </IconButton>
            <IconButton
              className='text-red-700'
              onClick={() => deleteTask(listId, taskId)}
            >
              <VscTrash />
            </IconButton>
          </div>
        </>
      )}
    </div>
  )
}
