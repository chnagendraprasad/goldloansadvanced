import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Box, Heading } from '@chakra-ui/react';
const DefinitionItem = ({ term, children }) => {
    return (_jsxs(Box, { marginY: 5, children: [_jsx(Heading, { as: 'dt', fontSize: 'md', color: 'gray.600', children: term }), _jsx("dd", { children: children })] }));
};
export default DefinitionItem;
