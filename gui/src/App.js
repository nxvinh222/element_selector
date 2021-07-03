import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Home from "./components/home/home";

function App() {
  return (
    <Router>
        {/* <Nav /> */}
        <div className="container">
            <Switch>
                <Route exact path="/" component={Home} />
            </Switch>
        </div>
        {/* <Footer /> */}
    </Router>
  );
}

export default App;
