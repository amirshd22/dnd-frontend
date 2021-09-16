import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import HomeScreen from "./screens/HomeScreen";
import LoginScreen from "./screens/LoginScreen";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <main>
          <Switch>
            <Route path="/" component={HomeScreen} exact />
            <Route path="/login" component={LoginScreen} />
          </Switch>
        </main>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
