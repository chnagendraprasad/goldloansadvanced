import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Box, Grid, Show, GridItem, Flex } from '@chakra-ui/react';
import CustomerGrid from '../components/CustomerGrid';
import CustomerHeading from '../components/CustomerHeading';
import BranchList from '../components/BranchList';
import LoanTypeSelector from '../components/LoanTypeSelector';
import SortSelector from '../components/SortSelector';
const HomePage = () => {
    return (_jsxs(Grid, { templateAreas: {
            base: `"main"`,
            lg: `"aside main"`,
        }, templateColumns: {
            base: '1fr',
            lg: '250px 1fr',
        }, children: [_jsx(Show, { above: "lg", children: _jsx(GridItem, { area: "aside", paddingX: 5, children: _jsx(BranchList, {}) }) }), _jsxs(GridItem, { area: "main", children: [_jsxs(Box, { paddingLeft: 2, children: [_jsx(CustomerHeading, {}), _jsxs(Flex, { marginBottom: 5, children: [_jsx(Box, { marginRight: 5, children: _jsx(LoanTypeSelector, {}) }), _jsx(SortSelector, {})] })] }), _jsx(CustomerGrid, {})] })] }));
};
export default HomePage;
