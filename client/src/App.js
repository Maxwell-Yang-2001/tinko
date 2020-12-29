import './App.css';
import { Switch, BrowserRouter as Router, Route } from 'react-router-dom';
import HomeScreen from './homeScreen/HomeScreen';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/">
          <HomeScreen />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
