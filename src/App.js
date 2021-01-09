import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Login from './components/Login';
import UserList from './components/UserList';
import React from 'react';
import 'antd/dist/antd.css';

function App() {

  return (
    <Router>
      <div>
        <div className="container">
          <Route exact path="/" render={() => (
            <React.Fragment>
              <Login />
            </React.Fragment>
          )} />
          <Route path="/userList" component={UserList} />
        </div>
      </div>
    </Router>
  );
}

export default App;