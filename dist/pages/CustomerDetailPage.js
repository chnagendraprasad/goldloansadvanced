import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { GridItem, Heading, SimpleGrid, Spinner } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import CustomerAttributes from "../components/CustomerAttributes";
import LoanAttributes from "../components/LoanAttributes";
import useCustomer from "../hooks/useCustomer";
const CustomerDetailPage = () => {
    const { custId } = useParams();
    const { data: customer, isLoading, error } = useCustomer(custId);
    if (isLoading)
        return _jsx(Spinner, {});
    if (error || !customer)
        throw error;
    return (_jsxs(SimpleGrid, { columns: { base: 1, md: 2 }, spacing: 5, children: [_jsxs(GridItem, { children: [_jsxs(Heading, { children: [customer.CustomerName, " - ", customer.CustomerCode] }), _jsx(CustomerAttributes, { customer: customer })] }), _jsxs(GridItem, { children: [_jsx(Heading, { children: "Loan Details" }), _jsx(LoanAttributes, { customer: customer })] })] }));
};
export default CustomerDetailPage;
