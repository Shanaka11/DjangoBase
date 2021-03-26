// React Imports
// 3rd Party Imports
import { BrowserRouter as Router, Route } from "react-router-dom";
// Local Imports
import Header from "./components/Header";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import Dashboard from "./pages/Dashboard";

function App() {
  return (
    <Router>
      <Header />
      {/* Have navbar */}
      <Route path="/" component={Dashboard} exact />
      {/* Full Screen Pages - Does not have navbar */}
      <Route path="/login" component={LoginPage} />
      <Route path="/register" component={RegisterPage} />
    </Router>
  );
}

export default App;
