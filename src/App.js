import BottomNavigationBar from "components/BottomNavigationBar";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
  Link,
} from "react-router-dom";

import Exercise from "pages/home/exercise";
import History from "pages/home/history";
import Account from "pages/home/account";
import HLLT from "pages/exercise/hllt";
import Weight from "pages/exercise/weight";
import Strethcing from "pages/exercise/strethcing";
import Yoga from "pages/exercise/yoga";

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/">
            <Redirect to="/home/exercise" />
          </Route>
          <Route path="/home">
            <Switch>
              <Route path="/home/exercise">
                <Exercise />
              </Route>
              <Route path="/home/history">
                <History />
              </Route>
              <Route path="/home/account">
                <Account />
              </Route>
            </Switch>
            <div style={{ paddingBottom: 74 }}></div>
            <BottomNavigationBar />
          </Route>
          <Route path="/exercise">
            <Switch>
              <Route path="/exercise/hllt">
                <HLLT />
              </Route>
              <Route path="/exercise/weight">
                <Weight />
              </Route>
              <Route path="/exercise/strethcing">
                <Strethcing />
              </Route>
              <Route path="/exercise/yoga">
                <Yoga />
              </Route>
            </Switch>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
