import { createBrowserRouter } from 'react-router-dom';
import { AppProvider } from '../core/state/AppContext';
import Home from '../containers/Home/Home';
import Login from '../containers/Login/Login';
import SignUp from '../containers/SignUp/SignUp';
import Account from '../containers/Account/Account';
import CreateAccount from '../containers/CreateAccount/CreateAccount';
import FirstLogin from '../containers/FirstLogin/FirstLogin';
import Operations from '../containers/Operations/Operations';
import PrivateRoute from './guards/GuardSession';


export const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <AppProvider>
        <Home />
      </AppProvider>
    ),
  },
  {
    path: '/login',
    element: (
      <AppProvider>
        <Login />
      </AppProvider>
    ),
  },
  {
    path: '/first-login',
    element: (
      <AppProvider>
        <FirstLogin />
      </AppProvider>
    ),
  },
  {
    path: '/signup',
    element: (
      <AppProvider>
        <SignUp />
      </AppProvider>
    ),
  },
  {
    path: '/account',
    element: (
      <PrivateRoute>
        <AppProvider>
          <Account />
        </AppProvider>
      </PrivateRoute>

    ),
  },
  {
    path: '/create-account',
    element: (
      <PrivateRoute>
        <AppProvider>
          <CreateAccount />
        </AppProvider>
      </PrivateRoute>
    ),
  },
  {
    path: '/operations',
    element: (
      <PrivateRoute>
        <AppProvider>
          <Operations />
        </AppProvider>
      </PrivateRoute>
    ),
  },
]);
