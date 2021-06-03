import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import TableComponent from '../tableComponent'

const selectOptions = ['carrot', 'grapes', 'apple', 'cake', 'crackers', 'chips', 'tv', 'ham', 'beef']
export default function () {

    const [selectedOption, setSelectedOption] = useState('')

    const handleOnSelectOption = (e) => {
        setSelectedOption(e.target.value)
    }
    return (
        <div className="ui segment">
            <h2>Age Demographic of Users With </h2>
            <select className="ui dropdown" onChange={handleOnSelectOption} value={selectedOption}>
                <option value=''></option>
                {
                    selectOptions.map((option, index) => (
                        <option key={`${option}-${index}`} value={option}>{option}</option>
                    ))
                }
            </select>
            <TableComponent
                headersName={['Age', "Count"]}
            >
            </TableComponent>
        </div>
    )
}