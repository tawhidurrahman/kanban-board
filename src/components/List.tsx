import { FC, useState } from 'react'
import { BsXLg } from 'react-icons/bs/index'
import { useKanbanContext } from '../context/kanban-context'
import { ListProps } from '../types'
import { IconButton } from './Button'
import { Card } from './Card'
import { ListForm } from './ListForm'
import { TaskForm } from './TaskForm'

export const List: FC<ListProps> = ({ listId, list, tasks }) => {
  const [toggleEdit, setToggleEdit] = useState(false)
  const { updateList, deleteList, addTask, handleDragEnter, drag } = useKanbanContext()

  const handleUpdateList = (title: string) => {
    setToggleEdit(!toggleEdit)
    updateList(listId, title)
  }

  return (
    <div
      onDragEnter={() => handleDragEnter(listId)}
      className={`list ${
        drag?.toListId && drag.toListId === listId ? 'bg-neutral-200' : 'bg-neutral-100'
      }`}
    >
      {toggleEdit ? (
        <div className='my-2'>
          <ListForm defaultValue={list.title} handleClick={handleUpdateList} />
        </div>
      ) : (
        <div className='flex justify-between align-top'>
          <h3
            className='flex-grow mt-0 capitalize'
            onDoubleClick={() => setToggleEdit(!toggleEdit)}
          >
            {list.title}
          </h3>
          <IconButton className='m-0 text-gray-600' onClick={() => deleteList(listId)}>
            <BsXLg />
          </IconButton>
        </div>
      )}
      {Object.entries(tasks).map(task => (
        <Card key={task[0]} listId={listId} taskId={task[0]} task={task[1]} />
      ))}
      <TaskForm
        defaultValue=''
        handleClick={taskDescription => addTask(listId, taskDescription)}
      />
    </div>
  )
}
