// import React from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import './App.css';
// import Login from './components/login';
// import Main from './components/main';
// import Manager from './components/managerMain';

// function App() {
//   return (
//     <Router>
//       <Routes>
//         <Route path="/" element={<Login/>} />
//         <Route path="/main" element={<Main/>} />
//         <Route path="/manager" element={<Manager/>} />
//       </Routes>
//     </Router>

//   );
// }

import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import './App.css';
import Login from './components/login';
import Main from './components/main';
import Manager from './components/managerMain';
import { AuthProvider, useAuth } from './context/AuthContext';

const ProtectedRoute = ({ element, allowedRoles, redirectTo }) => {
    const { user } = useAuth();

    if (!user) {
        return <Navigate to="/" />;
    }

    if (allowedRoles && !allowedRoles.includes(user.position)) {
        // Redirect to the specified allowed route if the user doesn't have the required role
        return <Navigate to={redirectTo} />;
    }

    return element;
};

function App() {
    return (
        <Router>
            <AuthProvider>
                <Routes>
                    <Route path="/" element={<Login />} />
                    <Route 
                        path="/main" 
                        element={
                            <ProtectedRoute 
                                element={<Main />} 
                                allowedRoles={['Clerk', 'Teller']} 
                                redirectTo="/main" 
                            />
                        } 
                    />
                    <Route 
                        path="/manager" 
                        element={
                            <ProtectedRoute 
                                element={<Manager />} 
                                allowedRoles={['Manager', 'Assistant Manager']} 
                                redirectTo="/manager" 
                            />
                        } 
                    />
                </Routes>
            </AuthProvider>
        </Router>
    );
}

export default App;




