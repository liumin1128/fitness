import BottomNavigationBar from "components/BottomNavigationBar";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
  Link,
} from "react-router-dom";
import Exercise from "pages/exercise";
import History from "pages/history";
import Account from "pages/account";

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/">
            <Redirect to="/exercise" />
          </Route>
          <Route path="/exercise">
            <Exercise />
          </Route>
          <Route path="/history">
            <History />
          </Route>
          <Route path="/account">
            <Account />
          </Route>
        </Switch>
        <div style={{ paddingBottom: 74 }}></div>
        <BottomNavigationBar />
      </div>
    </Router>
  );
}

export default App;
