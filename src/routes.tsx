import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "./pages/ErrorPage";
import CustomerDetailPage from "./pages/CustomerDetailPage";
import HomePage from "./pages/HomePage";
import Layout from "./pages/Layout";

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <HomePage /> },
      { path: 'customers/:custId', element: <CustomerDetailPage /> }
    ]
  }
]);

export default router;