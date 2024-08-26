import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import { ApplicationsPage } from '../../pages/ApplicationsPage';
import { DetailingPage } from '../../pages/DetailingPage';
import { ErrorPage } from '../../pages/ErrorPage';
import { ExpensesPage } from '../../pages/ExpensesPage';
import { HomePage } from '../../pages/HomePage';
import { MyNumbersPage } from '../../pages/MyNumbersPage';
import { ProfilePage } from '../../pages/ProfilePage';
import { RemainingPackagesPage } from '../../pages/RemainingPackagesPage';
import { ServicesPage } from '../../pages/ServicesPage';
import { TopUpBalancePage } from '../../pages/TopUpBalancePage';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        errorElement: <ErrorPage />,
        children: [
          {
            path: 'applications',
            element: <ApplicationsPage />,
          },
          {
            path: 'detailing',
            element: <DetailingPage />,
          },
          {
            path: 'expenses',
            element: <ExpensesPage />,
          },
          {
            index: true,
            element: <HomePage />,
          },
          {
            path: 'myNumbers',
            element: <MyNumbersPage />,
          },
          {
            path: 'profile',
            element: <ProfilePage />,
          },
          {
            path: 'remainingPackages',
            element: <RemainingPackagesPage />,
          },
          {
            path: 'services',
            element: <ServicesPage />,
          },
          {
            path: 'topUpBalance',
            element: <TopUpBalancePage />,
          },
        ],
      },
    ],
  },
]);
