import { jsx as _jsx } from "react/jsx-runtime";
import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "./pages/ErrorPage";
import CustomerDetailPage from "./pages/CustomerDetailPage";
import HomePage from "./pages/HomePage";
import Layout from "./pages/Layout";
const router = createBrowserRouter([
    {
        path: '/',
        element: _jsx(Layout, {}),
        errorElement: _jsx(ErrorPage, {}),
        children: [
            { index: true, element: _jsx(HomePage, {}) },
            { path: 'customers/:custId', element: _jsx(CustomerDetailPage, {}) }
        ]
    }
]);
export default router;
