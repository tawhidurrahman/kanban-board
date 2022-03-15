type Task = { id?: string; description: string; locked: boolean }
type List = { id?: string; title: string; tasks: { [taskId: string]: Task } }
type Kanban = { [listId: string]: List } | {}
type Drag = { fromListId: string; toListId?: string; taskId: string } | undefined

type BoardProps = { kanban: Kanban }
type CardProps = { listId: string; taskId: string; task: Task }
type ListProps = { listId: string; list: List; tasks: { [taskId: string]: Task } }
type ListFormProps = { defaultValue?: string; handleClick: (listName: string) => void }
type TaskFormProps = {
  defaultValue?: string
  handleClick: (description: string) => void
}

export type {
  Drag,
  Kanban,
  List,
  Task,
  BoardProps,
  CardProps,
  ListProps,
  ListFormProps,
  TaskFormProps,
}
