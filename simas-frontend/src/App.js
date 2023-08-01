import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from './components/pages/auth/Login';

function App() {
  return (
    <Router>
      <div className='app-header'>

      </div>
      <div className='app-content wrapper'>
        <Switch>
          <Route path="/" excact component={Login} />
        </Switch>
      </div>
    </Router>
  )
}

export default App;
