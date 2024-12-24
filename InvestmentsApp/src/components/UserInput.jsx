import React from 'react'
import PropTypes from 'prop-types'
import InputField from "./ui/InputField.jsx";

function UserInput(props) {
    const investmentData = props.investmentData;
    console.log(investmentData);
    const handleChange = (event) => {
        const {id, value} = event.target;
        const key = id.replace(/-([a-z])/g, (match, letter) => letter.toUpperCase());

        props.setInvestmentData((prevData) => ({
            ...prevData,
            [key]: parseFloat(value) || 0,
        }));
    }

    return (
        <div id={'user-input'}>
            <div className="input-group">
                <InputField id={'initial-investment'}
                            onChange={handleChange}
                            value={investmentData.initialInvestment}>Initial Investment</InputField>
                <InputField
                    id={'annual-investment'}
                    onChange={handleChange}
                    value={investmentData.annualInvestment}>Annual Investment</InputField>
            </div>

            <div className="input-group">
                <InputField id={'expected-return'}
                            onChange={handleChange}
                            value={investmentData.expectedReturn}>Expected Return </InputField>
                <InputField id={'duration'}
                            onChange={handleChange}
                            value={investmentData.duration}>Duration</InputField>
            </div>
        </div>
    )
}

UserInput.propTypes = {
    investmentData: PropTypes.shape({
        initialInvestment: PropTypes.number.isRequired,
        annualInvestment: PropTypes.number.isRequired,
        expectedReturn: PropTypes.number.isRequired,
        duration: PropTypes.number.isRequired,
    }).isRequired,
    setInvestmentData: PropTypes.func.isRequired,
}
export default UserInput;
