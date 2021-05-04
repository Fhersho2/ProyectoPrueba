import React, { lazy, Suspense } from "react";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";

// Components
import Navbar from './components/Navbar'
import Auth from './components/auth';

//Routes
import {login,dashboard} from './components/routes';

//Views
const Login = lazy(() => import("./pages/Login"));
const Dashboard = lazy(() => import("./pages/Dashboard"));
const Page404 = lazy(() => import("./pages/Page404"));

function App() {
    const estado = true;
  return (
    <Router>
      <Suspense fallback={<div><h1>Cargando...</h1></div>}>
        <Navbar />
            <Switch>

                <Route path={dashboard()} component={props => <Auth {...props} Component={Dashboard} />} />
                <Route  exact path={login()} component={Login} />
                <Route component={Page404} />
                
                
                
                
            </Switch>
      </Suspense>
    </Router>
  );
}

// Componentes


export default App;
