import './app.css'
import { env } from './env'

function App() {
  console.log(env.VITE_string)
  console.log(env.VITE_number)

  return (
    <>
      <h1>Hello World!</h1>
    </>
  )
}

export default App
