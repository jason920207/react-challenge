import React from 'react'

const TableComponent = (props) => (
    <table className="ui celled table">
        <thead>
            <tr>
                {props.headersName.map(((name, index) =>
                    <th key={`${name}-${index}`}>{name}</th>))}
            </tr>
        </thead>
        <tbody>
            {props.children}
        </tbody>
    </table>
)

export default TableComponent