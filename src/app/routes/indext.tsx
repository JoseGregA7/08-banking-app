import { createBrowserRouter } from 'react-router-dom';
import { AppProvider } from '../core/state/AppContext';
import Home from '../containers/Home/Home';
import Login from '../containers/Login/Login';
import SignUp from '../containers/SignUp/SignUp';
import Account from '../containers/Account/Account';
import CreateAccount from '../containers/CreateAccount/CreateAccount';


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
      <AppProvider>
        <Account />
      </AppProvider>
    ),
  },
  {
    path: '/create-account',
    element: (
      <AppProvider>
        <CreateAccount />
      </AppProvider>
    ),
  },
]);
