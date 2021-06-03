import React from 'react';
import ReactDOM from 'react-dom';
import Users from './components/users'
import AgeDemographic from './components/ageDemographic'


function App() {
    return (
        <div className="App ui container ">
            <Users />
            <AgeDemographic />
        </div>
    );
}

export default App;
