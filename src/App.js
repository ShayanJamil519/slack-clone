import './App.css'
import Header from './Header'
import Sidebar from './Sidebar'
import Chat from './Chat'
import { useStateValue } from './StateProvider'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Login from './Login'

function App() {
  const [{ user }, dispatch] = useStateValue()

  return (
    <div className="App">
      <Router>
        {!user ? (
          <h1>
            <Login />
          </h1>
        ) : (
          <>
            <Header />
            <div className="app__body">
              <Sidebar />
              <Switch>
                <Route path="/room/:roomId">
                  <Chat />
                </Route>

                <Route path="/">
                  <h1>Welcomeeeeeeeeeeeeeeeee</h1>
                </Route>
              </Switch>
            </div>
          </>
        )}
      </Router>
    </div>
  )
}

export default App
