import { createBrowserRouter } from 'react-router-dom'
import RootLayout, { ErrorBoundary } from './pages/root'
import RequireAuthLayout from './layout/require-auth/index.tsx'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    errorElement: <ErrorBoundary />,
    children: [
      {
        element: <RequireAuthLayout />,
        children: [
          {
            index: true,
            lazy: () => import('./pages/index.tsx'),
          },
          {
            path: 'money',
            lazy: () => import('./pages/money/layout.tsx'),
            children: [
              {
                path: 'goals',
                lazy: () => import('./pages/money/goals/index.tsx'),
              },
              {
                path: 'map',
                lazy: () => import('./pages/money/map/index.tsx'),
              },
              {
                path: 'planner',
                lazy: () => import('./pages/money/planner/index.tsx'),
              },
              {
                path: 'earnings',
                lazy: () => import('./pages/money/earnings/index.tsx'),
              },
              {
                path: 'incomes',
                lazy: () => import('./pages/money/incomes/index.tsx'),
              },
              {
                path: 'expenses',
                lazy: () => import('./pages/money/expenses/index.tsx'),
              },
            ],
          },
          {
            path: 'hub',
            lazy: () => import('./pages/hub/index.tsx'),
          },
          {
            path: 'chat',
            lazy: () => import('./pages/chat/index.tsx'),
          },
          {
            path: 'oppurtunities',
            lazy: () => import('./pages/oppurtunities/index.tsx'),
          },
          {
            path: 'profile',
            lazy: () => import('./pages/profile/index.tsx'),
          },
        ],
      },

      {
        path: 'signin',
        lazy: () => import('./pages/login/index.tsx'),
      },
    ],
  },
])
