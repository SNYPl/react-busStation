import "./App.css";
import { BrowserRouter, Route, Redirect } from "react-router-dom";
import Login from "./components/login/Login";
import Dashboard from "./components/dashboard/Dashboard";
import { useSelector } from "react-redux";

function App() {
  const loginHander = useSelector((state) => state.loginReducer.user.token);

  return (
    <BrowserRouter>
      <Route path="*">
        <Redirect to="/login" />
      </Route>
      <Route path="/" exact>
        <Redirect to="/login" />
      </Route>
      {loginHander ? <Redirect to="/dashboard" /> : <Redirect to="/login" />}
      <Route path="/login" component={Login}>
        {loginHander ? <Redirect to="/dashboard" /> : null}
      </Route>
      <Route path="/dashboard" component={Dashboard} />
    </BrowserRouter>
  );
}

export default App;
