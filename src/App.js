
  
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
//import Footer from "./components/Footer";
import Menu from "./pages/Menu";
import Order from "./pages/Order";
import User from "./pages/User";

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Announce from "./pages/Announce";


function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
       <Switch>
          <Route path="/" exact component={Home} />
         
          <Route path="/users" exact component={User} />
          <Route path="/order" exact component={Order} />
          <Route path="/menu" exact component={Menu} />
          <Route path="/announce" exact component={Announce} />
          </Switch>
      
      </Router>
    </div>
  );
}

export default App;


