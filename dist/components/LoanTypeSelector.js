import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import useLoanType from '../hooks/useLoanType';
import useLoanTypes from '../hooks/useLoanTypes';
import useCustomerQueryStore from '../store';
const LoanTypeSelector = () => {
    const { data, error } = useLoanTypes();
    const setSelectedLoanTypeId = useCustomerQueryStore(s => s.setLoantypeId);
    const selectedLoanTypeId = useCustomerQueryStore(s => s.customerQuery.loantypeId);
    const selectedLoanType = useLoanType(selectedLoanTypeId);
    if (error)
        return null;
    return (_jsxs(Menu, { children: [_jsx(MenuButton, { as: Button, rightIcon: _jsx(BsChevronDown, {}), children: selectedLoanType?.Name || 'LoanTypes' }), _jsx(MenuList, { children: data?.results.map((loantype) => (_jsx(MenuItem, { onClick: () => setSelectedLoanTypeId(loantype.Id), children: loantype.Name }, loantype.Id))) })] }));
};
export default LoanTypeSelector;
