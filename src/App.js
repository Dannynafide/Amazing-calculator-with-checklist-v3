import {createBrowserRouter, RouterProvider} from 'react-router-dom';

import {ThemeProvider} from 'context/themeContext';
import Edit from 'routes/EditRoute/Edit';
import ErrorPage from 'routes/ErrorRoute/Error';
import Project from 'routes/HomeRoute/Home';
import Root from 'routes/RootRoute';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {index: true, element: <Project />},
      {
        errorElement: <ErrorPage />,
        children: [
          {
            path: 'projects/:projectId',
            element: <Project />,
          },
          {
            path: 'edit/:projectId',
            element: <Edit />,
          },
        ],
      },
    ],
  },
]);

function Routing() {
  return <RouterProvider router={router} />;
}

function App() {
  return (
    <ThemeProvider>
      <Routing />
    </ThemeProvider>
  );
}

export default App;
