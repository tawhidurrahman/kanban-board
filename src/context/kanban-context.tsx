import { createContext, ReactNode, useContext } from 'react'
import { useKanban } from '../hooks'

const KanbanContext = createContext<ReturnType<typeof useKanban> | undefined>(undefined)

const KanbanProvider = (props: JSX.IntrinsicAttributes & { children: ReactNode }) => {
  const kanban = useKanban()
  return <KanbanContext.Provider {...props} value={kanban} />
}

const useKanbanContext = () => {
  const context = useContext(KanbanContext)
  if (context === undefined) {
    throw new Error(`useKanbanContext must be used within a KanbanProvider`)
  }
  return context
}

export { KanbanProvider, useKanbanContext }
