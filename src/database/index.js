'use strict';
const _ = require('lodash');
const db = require('./db.js');


// UTILS
//----------------
// This is a mock db call that waits for # milliseconds and returns
const mockDBCall = (dataAccessMethod) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(dataAccessMethod());
        }, 500);
    });
};

// MOCK DB CALLS
//----------------
const getUsers = () => {
    const dataAccessMethod = () => _.map(db.usersById, userInfo => userInfo)
    return mockDBCall(dataAccessMethod);
};

const getListOfAgesOfUsersWith = (item) => {
    const dataAccessMethod = () => {
        // fill me in :)

        if (!item) {
            return []
        }

        const itemList = {}
        const age = {}
        const data = []
        const itemsOfUserByUsername = db.itemsOfUserByUsername
        const usersById = db.usersById


        for (let user in itemsOfUserByUsername) {
            itemsOfUserByUsername[user].map((item) => {
                if (!itemList.hasOwnProperty(item)) {
                    itemList[item] = []
                }
                itemList[item].push(user)
            })

        }

        for (let user in usersById) {
            if (itemList[item].includes(usersById[user].username)) {
                if (age.hasOwnProperty(usersById[user].age)) {
                    age[usersById[user].age] += 1
                } else {
                    age[usersById[user].age] = 1
                }
            }
        }

        for (let key in age) {
            const newObj = {}
            newObj['age'] = key
            newObj['count'] = age[key]
            data.push(newObj)
        }

        return data

    }
    return mockDBCall(dataAccessMethod);
}

module.exports = {
    getUsers,
    getListOfAgesOfUsersWith
};
