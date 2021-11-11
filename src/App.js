import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import routes from "./routes/route";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import MyNavbar from "./Components/MyNavbar";

function App() {
  return (
    <Router>
      <div>
        <MyNavbar/>
        <Switch>
          {routes.map((route) => {
            return (
              <Route exact={route.exact} path={route.path}>
                {route.component}
              </Route>
            );
          })}
        </Switch>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
