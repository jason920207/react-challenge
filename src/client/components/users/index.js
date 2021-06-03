import React, { useEffect, useState } from 'react'
import { getUsers, } from "../../redux/actions/users";
import { useSelector, useDispatch } from 'react-redux'
import TableComponent from '../tableComponent'

export default function () {

    const users = useSelector((state) => {
        return state.users.users
    })
    const dispatch = useDispatch()

    useEffect(async () => {
        dispatch(getUsers())
    }, [])

    return (
        <div className="ui segment">
            <h2> All Users</h2>
            <h4> Users and their age</h4>
            <TableComponent
                headersName={['Username', "Age"]}
            >
                {users.map((user, index) => (
                    <tr key={`${user.username}-${index}`}>
                        <td>{user.username}</td>
                        <td>{user.age}</td>
                    </tr>
                ))}
            </TableComponent>

        </div>
    )

}