import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { HStack, Image } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.webp';
import ColorModeSwitch from './ColorModeSwitch';
import SearchInput from './SearchInput';
const NavBar = () => {
    return (_jsxs(HStack, { padding: "10px", children: [_jsx(Link, { to: "/", children: _jsx(Image, { src: logo, boxSize: "60px", objectFit: 'cover' }) }), _jsx(SearchInput, {}), _jsx(ColorModeSwitch, {})] }));
};
export default NavBar;
