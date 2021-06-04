import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import TableComponent from '../tableComponent'
import { getAgeDemographicOfUser, } from "../../redux/actions/ageDemographic";
import LoaderComponent from '../loaderComponent'
import _ from 'lodash';

const selectOptions = ['carrot', 'grapes', 'apple', 'cake', 'crackers', 'chips', 'tv', 'ham', 'beef']

export default function () {

    const [selectedOption, setSelectedOption] = useState('')
    const ageDemographicOfUser = useSelector((state) => {
        return state.ageDemographic.ageDemographicOfUser
    })
    const isLoading = useSelector((state) => {
        return state.ageDemographic.isLoading
    })
    const error = useSelector((state) => {
        return state.ageDemographic.error
    })

    const dispatch = useDispatch()

    const handleOnSelectOption = (e) => {
        setSelectedOption(e.target.value)
        dispatch(getAgeDemographicOfUser(e.target.value))
    }

    if (error) {
        <section className="ui segment">
            <h2>Fetching ageDemographic Error.....</h2>
        </section>
    }

    return (
        <section className="ui segment">
            <h2>Age Demographic of Users With {_.capitalize(selectedOption)}</h2>
            <select className="ui dropdown" onChange={handleOnSelectOption} value={selectedOption}>
                <option value=''></option>
                {
                    selectOptions.map((option, index) => (
                        <option key={`${option}-${index}`} value={option}>{option}</option>
                    ))
                }
            </select>

            {isLoading
                ? <LoaderComponent />
                : <TableComponent
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

        </section>
    )
}