import './App.css'
import { env } from './env'

function App() {
  console.log(env.VITE_string)
  console.log(env.VITE_number)

  return (
    <>
      <h1>Hello</h1>
    </>
  )
}

export default App
