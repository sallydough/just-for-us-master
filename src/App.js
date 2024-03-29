// import React from "react";
// import { BrowserRouter as Router,Routes, Route } from "react-router-dom";
// // import ThermostatCard from "./components/ThermostatCard";
// import Home from "./pages/Home";
// import LoginSignup from "./components/UserLogin/LoginSignUp";
// // import Services from "./pages/Services";
// // import DoorLockPage from "./pages/DoorLockPage";
// // import Entertainment from "./pages/Entertainment";
// // import SmartLoftPage from "./pages/SmartLoftPage";
// // import SmartLightsPage from "./pages/SmartLightsPage";
// // import QuotesPage from "./pages/QuotesPage";
// // import WelcomeScreen from "./components/WelcomeScreen";
// // import SmartLightCard from "./components/SmartLightCard";
// // import AnimationPage from "./pages/AnimationPage";
// // import Shortcuts from "./pages/Shortcuts";
// // import SmartTVAppSelector from "./pages/SmartTVAppSelector";, Route, Routes

// function App() {
//   return (
//     <Router>

//       <Routes>
//       <Route path="/" element={<LoginSignup/>} />
//       <Route path="/home" element={<Home />} />
//       </Routes>
//       {/* <Routes>
//         <Route path="/garden-loft-app/home" element={<Home />} />
//         <Route path="/garden-loft-app/door-lock" element={<DoorLockPage />} />
//         <Route path="/garden-loft-app/shortcuts" element={<Shortcuts />} />
//         <Route path="/garden-loft-app/entertainment" element={<Entertainment />} />
//         <Route path="/garden-loft-app/services" element={<Services />} />
//         <Route path="/garden-loft-app/thermostat" element={<ThermostatCard />} />
//         <Route path="/garden-loft-app/smart-light" element={<SmartLightCard />} />
//         <Route path="/garden-loft-app/smart-loft" element={<SmartLoftPage />} />
//         <Route path="/garden-loft-app/smart-lights" element={<SmartLightsPage />} />
//         <Route path="/garden-loft-app/quotes-page" element={<QuotesPage />} />
//         <Route path="/garden-loft-app/welcome" element={<WelcomeScreen />} />
//         <Route path="/garden-loft-app/animation" element={<AnimationPage />} />
//         <Route path="/garden-loft-app/" element={<SmartTVAppSelector />} />
//       </Routes> */}
//     </Router>
//   );
// }
// export default App;

// App.js
// import React, { useState } from "react";
// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import Home from "./pages/Home";
// import LoginSignUp from "./components/UserLogin/LoginSignUp";

// function App() {
//   const [enteredName, setEnteredName] = useState(""); // State to hold enteredName

//   const handleLogin = (name) => {
//     // Implement the logic for onLogin
//     console.log(`Logged in as: ${name}`);
//     setEnteredName(name); // Set enteredName in the state
//   };

//   const handleNameEntered = (name, memberId) => {
//     // Implement the logic for onNameEntered
//     console.log(`Name entered: ${name}, Member ID: ${memberId}`);
//   };

//   return (
//     <Router>
//       <Routes>
//         <Route
//           path="/"
//           element={
//             <LoginSignUp
//               onLogin={handleLogin}
//               onNameEntered={handleNameEntered}
//             />
//           }
//         />
//         {/* Pass enteredName as a prop to the Home component */}
//         <Route path="/home" element={<Home enteredName={enteredName} />} />
//       </Routes>
//     </Router>
//   );
// }

// export default App;

// App.js
import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import LoginSignUp from "./components/UserLogin/LoginSignUp";

function App() {
  const [enteredName, setEnteredName] = useState(""); // State to hold enteredName

  const handleLogin = (name) => {
    // Implement the logic for onLogin
    console.log(`Logged in as: ${name}`);
    setEnteredName(name); // Set enteredName in the state
  };

  const handleNameEntered = (name, memberId) => {
    // Implement the logic for onNameEntered
    console.log(`Name entered: ${name}, Member ID: ${memberId}`);
  };

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <LoginSignUp
              onLogin={handleLogin}
              onNameEntered={handleNameEntered}
            />
          }
        />
        {/* Pass enteredName as a prop to the Home component */}
        <Route path="/home" element={<Home enteredName={enteredName} />} />
      </Routes>
    </Router>
  );
}

export default App;
