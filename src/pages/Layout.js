import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import NavBar from '../components/NavBar';
import { Outlet } from 'react-router-dom';
import { Box } from '@chakra-ui/react';
const Layout = () => {
    return (_jsxs(_Fragment, { children: [_jsx(NavBar, {}), _jsx(Box, { padding: 5, children: _jsx(Outlet, {}) })] }));
};
export default Layout;
