import { jsx as _jsx } from "react/jsx-runtime";
import { Box } from "@chakra-ui/react";
const CustomerCardContainer = ({ children }) => {
    return (_jsx(Box, { _hover: {
            transform: 'scale(1.03)',
            transition: 'transform .15s ease-in'
        }, borderRadius: 10, overflow: "hidden", children: children }));
};
export default CustomerCardContainer;
