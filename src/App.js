import Login from "./components/Login";
import Forgot from "./components/Forgot";
import Register from "./components/Register";

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" exact Component={Login} />
        <Route path="/forgot" Component={Forgot} />
        <Route path="/register" Component={Register} />
      </Routes>
    </Router>
  );
}

export default App;
