import BottomNavigationBar from "components/BottomNavigationBar";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
  Link,
} from "react-router-dom";

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/">
            <Redirect to="/exercise" />
          </Route>
          <Route path="/exercise">exercise</Route>
          <Route path="/history">history</Route>
          <Route path="/account">account</Route>
        </Switch>
        <BottomNavigationBar />
      </div>
    </Router>
  );
}

export default App;
