import React from 'react'
import PropTypes from 'prop-types'
import {formatter} from "../util/investment.js";

function Result(props) {
    if (props.data.length === 0) {
        return <p id={'result'}>No results to display. Please enter investment details.</p>;
    }
    let totalInterest = 0;
    let totalInvestment = props.initialInvestment;

    const handleInterestIncrement = (number) => {
        totalInterest += number;
        return totalInterest;
    }

    const handleInvestmentIncrement = (number) => {
        totalInvestment += number;
        return totalInvestment;
    }

    return (
        <table id={'result'}>
            <thead>
            <tr>
                <th>Year</th>
                <th>Investment Value</th>
                <th>Interest (Year)</th>
                <th>Total Interest</th>
                <th>Invested Capital</th>
            </tr>
            </thead>
            <tbody>
            {props.data.map((item, index) =>
                <tr key={index}>
                    <td>{item.year}</td>
                    <td>{formatter.format(item.valueEndOfYear)}</td>
                    <td>{formatter.format(item.interest)}</td>
                    <td>{formatter.format(handleInterestIncrement(item.interest))}</td>
                    <td>{formatter.format(handleInvestmentIncrement(item.annualInvestment))}</td>
                </tr>)}
            </tbody>
        </table>
    )
}

Result.propTypes = {
    data: PropTypes.arrayOf(
        PropTypes.shape({
            year: PropTypes.number.isRequired,
            interest: PropTypes.number.isRequired,
            valueEndOfYear: PropTypes.number.isRequired,
            annualInvestment: PropTypes.number.isRequired,
        })
    ).isRequired,
    initialInvestment: PropTypes.number.isRequired
}
export default Result
