import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Intrenship from "./pages/Intrenship/Intrenship";
import ViewIntrenShipDetailsPage from "./pages/Intrenship/ViewIntrenShipDetailsPage";
import Job from "./pages/Jobs/Job";
import ViewJobsDetailsPages from "./pages/Jobs/ViewJobsDetailsPages";
import Login from "./pages/Authentication/Login";
import Singup from "./pages/Authentication/Singup";
import Layout from "./Layouts/Layout";
import Employeer from "./pages/Dashboard/Employeer";
import UserDasboard from "./pages/EmployeeDashboardComponents/EmployeeDashboard";
import SearchOpportunity from "./pages/EmployeeDashboardComponents/SearchOpportunity";
import EmployeeProfile from "./pages/EmployeeDashboardComponents/EmployeeProfiles/EmployeeProfileDashboard";
import EmployeeApplication from "./pages/EmployeeDashboardComponents/EmployeeApplication";
import EmployeeSetting from "./pages/EmployeeDashboardComponents/EmployeeSetting";
import About from "./pages/EmployeeDashboardComponents/EmployeeProfiles/About";
import Education from "./pages/EmployeeDashboardComponents/EmployeeProfiles/Education";
import Skills from "./pages/EmployeeDashboardComponents/EmployeeProfiles/Skills";
import Language from "./pages/EmployeeDashboardComponents/EmployeeProfiles/Language";
import ForgetPassword from "./pages/Authentication/ForgetPassword";
import ResetPassword from "./pages/Authentication/ResetPassword";
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
      {
        path: "Forget-Password",
        element: <ForgetPassword />,
      },
      {
        path: "Reset-Password",
        element: <ResetPassword />,
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
        children: [
          {
            path: "about",
            index: true,
            element: <About />,
          },
          {
            path: "education",
            element: <Education />,
          },
          {
            path: "skills",
            element: <Skills />,
          },
          {
            path: "language",
            element: <Language />,
          },
        ],
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
