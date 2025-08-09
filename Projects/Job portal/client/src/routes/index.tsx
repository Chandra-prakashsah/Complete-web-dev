import { createBrowserRouter } from "react-router-dom";
import { HomeLayout, Register, AddJobs, Admin, AllJobs, DashboardLayout, DeleteJob, EditJob, Error, Login, Landing, Stats, Profile } from '../pages'
import { action as RegisterAction } from "../pages/register";

const routes = createBrowserRouter([
  {
    path: '/',
    element: <HomeLayout />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Landing />
      },
      {
        path: 'register',
        element: <Register />,
        action:RegisterAction
      },
      {
        path: 'login',
        element: <Login />
      },
      {
        path:'dashboard',
        element: <DashboardLayout />,
        children: [
          {
            index: true,
            element: <AddJobs />
          },
          {
            path: 'stats',
            element: <Stats />
          },
          {
            path: 'profile',
            element: <Profile />
          },
          {
            path: 'add-jobs',
            element: <AddJobs />
          },
          {
            path: 'all-jobs',
            element: <AllJobs />
          },
          {
            path: 'edit-job/:id',
            element: <EditJob />
          },
          {
            path:'admin',
            element: <Admin />
          }
        ]
      }
    ]
  },
])

export default routes