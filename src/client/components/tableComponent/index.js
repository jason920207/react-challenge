import React from 'react'
import LoaderComponent from '../loaderComponent'

const TableComponent = (props) => (
    <table className="ui celled table">
        <thead>
            <tr>
                {props.headersName.map(((name, index) =>
                    <th key={`${name}-${index}`}>{name}</th>))}
            </tr>
        </thead>
        <tbody>
            {
                props.isLoading
                    ? <LoaderComponent />
                    : props.children
            }

        </tbody>
    </table>
)

export default TableComponent