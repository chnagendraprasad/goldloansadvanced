import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { Box, Heading, Text } from '@chakra-ui/react';
import { isRouteErrorResponse, useRouteError, } from 'react-router-dom';
import NavBar from '../components/NavBar';
const ErrorPage = () => {
    const error = useRouteError();
    return (_jsxs(_Fragment, { children: [_jsx(NavBar, {}), _jsxs(Box, { padding: 5, children: [_jsx(Heading, { children: "Oops" }), _jsx(Text, { children: isRouteErrorResponse(error)
                            ? 'This page does not exist.'
                            : 'An unexpected error occurred.' })] })] }));
};
export default ErrorPage;
