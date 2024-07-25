import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Intrenship from "./pages/Intrenship/Intrenship";
import ViewIntrenShipDetailsPage from "./pages/Intrenship/ViewIntrenShipDetailsPage";
import Job from "./pages/Jobs/Job";
import ViewJobsDetailsPages from "./pages/Jobs/ViewJobsDetailsPages";
import Login from "./pages/Authentication/Login";
import Singup from "./pages/Authentication/Singup";
import Layout from "./Layouts/Layout";
import Employeer from "./pages/Dashboard/Employeer";
import UserDasboard from "./pages/UserDashboardComponents/EmployeeDashboard";
import SearchOpportunity from "./pages/UserDashboardComponents/SearchOpportunity";
import EmployeeProfile from "./pages/UserDashboardComponents/EmployeeProfile";
import EmployeeApplication from "./pages/UserDashboardComponents/EmployeeApplication";
import EmployeeSetting from "./pages/UserDashboardComponents/EmployeeSetting";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "Login", element: <Login /> },
      { path: "Signup", element: <Singup /> },
      { path: "internships", element: <Intrenship /> },
      {
        path: "ViewIntrenShipDetailsPage/:id",
        element: <ViewIntrenShipDetailsPage />,
      },
      { path: "jobs", element: <Job /> },
      {
        path: "ViewJobsDetailsPages/:id",
        element: <ViewJobsDetailsPages />,
      },
    ],
  },
  {
    path: "Employee/Home",
    element: <Employeer />,
    children: [
      {
        path: "dashboard",
        element: <UserDasboard></UserDasboard>,
      },
      {
        path: "search",
        element: <SearchOpportunity />,
      },
      {
        path: "profile",
        element: <EmployeeProfile />,
      },
      {
        path: "application",
        element: <EmployeeApplication />,
      },
      {
        path: "setting",
        element: <EmployeeSetting />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
