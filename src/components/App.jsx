import { Route, Routes } from 'react-router-dom';
import Layout from './Layout/Layout';
import NotFound from './NotFound/NotFound';
// import Contacts from './Contacts/Contacts';
// import Register from './Register/Register';
// import Login from './Login/Login';
import { Suspense, lazy, useEffect } from 'react';
import { refreshAuth } from 'api/auth';
import { refreshContacts } from 'api/contacts';
import Home from './Home/Home';
import PublicRoute from 'guards/PublicRoute/PublicRoute';
import PrivateRoute from 'guards/PrivateRoute/PrivateRoute';

const Login = lazy(() => import('./Login/Login'));
const Register = lazy(() => import('./Register/Register'));
const Contacts = lazy(() => import('./Contacts/Contacts'));

export const App = () => {
  useEffect(() => {
    refreshAuth();
    refreshContacts();
  }, []);
  return (
    <Suspense fallback={'Loading.....'}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route
            path="contacts"
            element={
              <PrivateRoute>
                <Contacts />
              </PrivateRoute>
            }
          />
        </Route>
        <Route
          path="/register"
          element={
            <PublicRoute>
              <Register />
            </PublicRoute>
          }
        />
        <Route
          path="/login"
          element={
            <PublicRoute>
              <Login />
            </PublicRoute>
          }
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Suspense>
  );
};
