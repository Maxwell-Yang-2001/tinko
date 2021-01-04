import './App.css';
import { Switch, BrowserRouter as Router, Route } from 'react-router-dom';
import HomeScreen from './homeScreen/homeScreen';
import TeamScreen from './teamScreen/teamScreen';
import { useState } from 'react';

function App() {
  const [userId, setUserId] = useState(undefined);

  if (userId === undefined) {
    return (
      <Router>
        <Switch>
          <Route path="/home">
            <HomeScreen />
          </Route>
          <Route path="/team">
            <TeamScreen />
          </Route>
        </Switch>
      </Router>
    );
  } else 
  {
    return null;
  }
}

export default App;
