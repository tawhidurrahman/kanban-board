import { FC } from 'react'
import { useKanbanContext } from '../context/kanban-context'
import { BoardProps } from '../types'
import { List } from './List'
import { ListForm } from './ListForm'

export const Board: FC<BoardProps> = ({ kanban }) => {
  const { addList } = useKanbanContext()

  return (
    <div className='board'>
      <div className='mb-5 prose sm:prose-sm'>
        <h1>Kanban Board</h1>
      </div>
      <div className='list-container'>
        {Object.entries(kanban).map(list => (
          <div>
            <List key={list[0]} listId={list[0]} list={list[1]} tasks={list[1].tasks} />
          </div>
        ))}
        <div>
          <div className='list bg-neutral-100'>
            <h3 className='capitalize'>Add New List</h3>
            <ListForm handleClick={listName => listName && addList(listName)} />
          </div>
        </div>
      </div>
    </div>
  )
}
