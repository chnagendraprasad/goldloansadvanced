import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Button, Menu, MenuButton, MenuItem, MenuList, } from '@chakra-ui/react';
import { BsChevronDown } from 'react-icons/bs';
import useCustomerQueryStore from '../store';
const SortSelector = () => {
    const sortOrders = [
        { value: "", label: "Relevance" },
        { value: "totalloans", label: "Total Loans" },
        { value: "name", label: "Customer Name" },
        { value: "-name", label: "Customer Name in reverse" },
        // { value: "disbursed", label: "Date Disbursed" },
        // { value: "-disbursed", label: "Date Disbursed in reverse" },
    ];
    const setSortOrder = useCustomerQueryStore((s) => s.setSortOrder);
    const sortOrder = useCustomerQueryStore((s) => s.customerQuery.sortOrder);
    const currentSortOrder = sortOrders.find((order) => order.value === sortOrder);
    return (_jsxs(Menu, { children: [_jsxs(MenuButton, { as: Button, rightIcon: _jsx(BsChevronDown, {}), children: ["Order by: ", currentSortOrder?.label || 'Relevance'] }), _jsx(MenuList, { children: sortOrders.map((order) => (_jsx(MenuItem, { onClick: () => setSortOrder(order.value), value: order.value, children: order.label }, order.value))) })] }));
};
export default SortSelector;
