import logo from "./assets/investment-calculator-logo.png"
import Header from "./components/Header.jsx";
import UserInput from "./components/UserInput.jsx";
import React, {useEffect} from "react";
import Result from "./components/Result.jsx";
import {calculateInvestmentResults} from "./util/investment.js";

function App() {
    const [resultData, setResultData] = React.useState([]);
    const [investmentData, setInvestmentData] = React.useState({
        initialInvestment: 0,
        annualInvestment: 0,
        expectedReturn: 0,
        duration: 0
    });

    useEffect(() => {
        const annualData = calculateInvestmentResults(investmentData);
        setResultData(annualData);
    }, [investmentData]);

    return (
        <>
            <Header title={"Investments Calculator"} image={logo}/>
            <UserInput investmentData={investmentData} setInvestmentData={setInvestmentData} />
            <Result initialInvestment={investmentData.initialInvestment} data={resultData}/>
        </>
    )
}

export default App
