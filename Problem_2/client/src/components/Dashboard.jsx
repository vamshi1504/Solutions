// import axios from 'axios'
// import React, { useEffect } from 'react'
// import { useNavigate } from 'react-router-dom'

// const Dashboard = () => {

//     const navigate = useNavigate()
//     axios.defaults.withCredentials = true;
//     useEffect(() => {
//         axios.get(`http://locaalhost:3000/auth/verify`)
//         .then(res => {
//             if(res.data.status) {

//             }else{
//                 navigate('/')
//             }
//         })
//     })

//   return (
//     <div>
//       Dashboard
//     </div>
//   )
// }

// export default Dashboard

import React, { useEffect } from 'react';
import { useNavigate, Route, Switch } from 'react-router-dom';
import axios from 'axios';
import Sidebar from './sidebar'
import Profile from './dashboardComponents/Profile';
import Settings from './dashboardComponents/settings';

// Header component
const Header = () => {
  return (
    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '10px', borderBottom: '1px solid #ccc' }}>
      <div>
        <Link to="/dashboard">Logo</Link>
      </div>
      <div>
        <Link to="/logout">Logout</Link>
      </div>
    </div>
  );
};

// Dashboard component
const Dashboard = () => {
  const navigate = useNavigate();

  useEffect(() => {
    axios.defaults.withCredentials = true;
    axios.get(`http://localhost:3000/auth/verify`)
      .then(res => {
        if (!res.data.status) {
          navigate('/');
        }
      })
      .catch(err => {
        console.error(err);
      });
  }, [navigate]);

  return (
    <div>
      <Header />
      <div style={{ display: 'flex' }}>
        <Sidebar />
        <Switch>
          <Route path="/profile" component={Profile} />
          <Route path="/settings" component={Settings} />
          <Route path="/dashboard">
            <div>
              <h2>Welcome to the Dashboard!</h2>
              <p>This is the home page of the dashboard.</p>
            </div>
          </Route>
        </Switch>
      </div>
    </div>
  );
};

export default Dashboard;
