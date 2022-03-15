import { useState } from 'react'
import { v4 as uuid } from 'uuid'
import { Drag, Kanban } from '../types'

export const useKanban = () => {
  const [kanban, setKanban] = useState<Kanban>({})
  const [drag, setDrag] = useState<Drag>(undefined)

  const addList = (title: string) => {
    let k = { ...kanban, [uuid()]: { title, tasks: {} } }
    setKanban(k)
  }

  const updateList = (listId: string, title: string) => {
    let k = { ...kanban }
    k[listId].title = title
    setKanban(k)
  }

  const deleteList = (listId: string) => {
    let k = { ...kanban }
    if (k[listId]) delete k[listId]
    setKanban(k)
  }

  const addTask = (listId: string, description: string) => {
    let k = { ...kanban }
    if (!description) return
    k[listId].tasks = { ...k[listId].tasks, [uuid()]: { description, locked: false } }
    setKanban(k)
  }

  const updateTask = (
    listId: string,
    taskId: string,
    description: string,
    locked: boolean
  ) => {
    let k = { ...kanban }
    k[listId].tasks[taskId] = { ...k[listId].tasks[taskId], description, locked }
    setKanban(k)
  }

  const deleteTask = (listId: string, taskId: string) => {
    let k = { ...kanban }
    if (k[listId].tasks[taskId]) delete k[listId].tasks[taskId]
    setKanban(k)
  }

  const moveTask = (fromListId: string, toListId: string, taskId: string) => {
    let k = { ...kanban }
    k[toListId].tasks = { [taskId]: k[fromListId].tasks[taskId], ...k[toListId].tasks }
    delete k[fromListId].tasks[taskId]
    setKanban(k)
  }

  const handleDragStart = (fromListId: string, taskId: string) => {
    setDrag({ fromListId, taskId })
  }

  const handleDragEnter = (toListId: string) => {
    if (drag && drag.fromListId !== toListId) setDrag({ ...drag, toListId })
  }

  const handleDragEnd = () => {
    if (!drag || !drag.toListId || drag.fromListId === drag.toListId) return
    moveTask(drag.fromListId, drag.toListId, drag.taskId)
    setDrag(undefined)
  }

  return {
    kanban,
    drag,
    addList,
    updateList,
    deleteList,
    addTask,
    updateTask,
    deleteTask,
    handleDragStart,
    handleDragEnter,
    handleDragEnd,
  }
}
