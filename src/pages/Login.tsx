import '../App.css'
import {useAuth0} from "@auth0/auth0-react";

function App() {
    const { loginWithRedirect } = useAuth0()
  return (
    <>
      <h1>Vite + React + Login</h1>
      <div className="card">
        <button onClick={(): Promise<void> => loginWithRedirect()}>Login</button>
      </div>

    </>
  )
}

export default App
