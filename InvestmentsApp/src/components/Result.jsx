import React from 'react'
import PropTypes from 'prop-types'

function Result(props) {
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
                    <td>${item.investmentValue}</td>
                    <td>${item.annualInterest}</td>
                    <td>${item.totalInterest}</td>
                    <td>${item.investedCapital}</td>
                </tr>)}
            </tbody>
        </table>
    )
}

Result.propTypes = {
    data: PropTypes.array,
}
export default Result
