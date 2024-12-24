import logo from "./assets/investment-calculator-logo.png"
import Header from "./components/Header.jsx";
import UserInput from "./components/UserInput.jsx";
import React from "react";
import Result from "./components/Result.jsx";

function App() {
    const resultData = [];
    const [investmentData, setInvestmentData] = React.useState({
        initialInvestment: "",
        annualInvestment: "",
        expectedReturn: "",
        duration: ""
    });

    return (
        <>
            <Header title={"Investments Calculator"} image={logo}/>
            <UserInput investmentData={investmentData} />
            <Result data={resultData}/>
        </>
    )
}

export default App
