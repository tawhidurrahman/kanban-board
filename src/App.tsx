import { Board } from './components/Board'
import { useKanbanContext } from './context/kanban-context'

function App() {
  const { kanban } = useKanbanContext()

  return <Board kanban={kanban} />
}
export default App
