import React ,{createContext} from 'react'
import './App.css'
import TableBodyCard from './components/TableBodyCard'
import TableRowCard from './components/TableRowCard'

export const Context = createContext(Object)

const App = () => {

  return (
      <div className='container' >
        <TableBodyCard/>
      </div>
  )
}

export default App
