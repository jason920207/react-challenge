import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import TableComponent from '../tableComponent'
import { getAgeDemographicOfUser, } from "../../redux/actions/ageDemographic";

const selectOptions = ['carrot', 'grapes', 'apple', 'cake', 'crackers', 'chips', 'tv', 'ham', 'beef']

export default function () {

    const [selectedOption, setSelectedOption] = useState('')
    const ageDemographicOfUser = useSelector((state) => {
        return state.ageDemographic.ageDemographicOfUser
    })
    const isLoading = useSelector((state) => {
        return state.ageDemographic.isLoading
    })
    const dispatch = useDispatch()

    const handleOnSelectOption = (e) => {
        console.log()
        setSelectedOption(e.target.value)
        dispatch(getAgeDemographicOfUser(e.target.value))
    }

    return (
        <div className="ui segment">
            <h2>Age Demographic of Users With {selectedOption}</h2>
            <select className="ui dropdown" onChange={handleOnSelectOption} value={selectedOption}>
                <option value=''></option>
                {
                    selectOptions.map((option, index) => (
                        <option key={`${option}-${index}`} value={option}>{option}</option>
                    ))
                }
            </select>
            {
                <TableComponent
                    headersName={['Age', "Count"]}
                    isLoading={isLoading}
                >
                    {
                        ageDemographicOfUser.map((user, index) => (
                            <tr key={`${user.age}-${index}`}>
                                <td>{user.age}</td>
                                <td>{user.count}</td>
                            </tr>
                        ))
                    }
                </TableComponent>
            }

        </div>
    )
}