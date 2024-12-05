import logo from "./assets/investment-calculator-logo.png"
import Header from "./components/Header.jsx";
import UserInput from "./components/UserInput.jsx";
import React from "react";

function App() {
  return (
      <>
        <Header title={"Investments Calculator"} image={logo} />
        <UserInput />
      </>
  )
}

export default App
