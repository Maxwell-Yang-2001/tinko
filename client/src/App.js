import './App.css';
import { Switch, BrowserRouter as Router, Route } from 'react-router-dom';
import HomeScreen from './homeScreen/HomeScreen';
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
        </Switch>
      </Router>
    );
  } else 
  {
    return null;
  }
}

export default App;
