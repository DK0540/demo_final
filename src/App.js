// import {
//   BrowserRouter,
//   Routes,
//   Route,
//   NavLink,
//   Router,
// } from "react-router-dom";
// import "./App.css";
// import Dashboard from "./Components/Body/Dashboard/Dashboard";
// import HeaderComponent from "./Components/Header/HeaderComponent";
// import Login from "./User/Login";

// function App() {
//   return (
//     <BrowserRouter>
//       <Routes>
//         <Route exact path="/" element={<Login />} />
//         <Route exact path="/ds" element={<Dashboard />} />
//       </Routes>
//     </BrowserRouter>
//   );
// }

// export default App;

// import { BrowserRouter } from "react-router-dom";
// import "./App.css";
// import HeaderComponent from "./Components/Header/HeaderComponent";

// function App() {
//   return (
//     <BrowserRouter>
//       <HeaderComponent />;
//     </BrowserRouter>
//   );
// }

// export default App;

import "./App.css";
import HeaderComponent from "./Components/Header/HeaderComponent";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  return (
    <Router>
      <HeaderComponent />
    </Router>
  );
}

export default App;
