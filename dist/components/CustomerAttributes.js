import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { SimpleGrid, Text } from "@chakra-ui/react";
import DefinitionItem from "./DefinitionItem";
const CustomerAttributes = ({ customer }) => {
    return (_jsxs(SimpleGrid, { columns: 2, as: "dl", children: [_jsx(DefinitionItem, { term: "Branch Name", children: _jsx(Text, { children: customer.BranchName }, customer.CustId) }), _jsx(DefinitionItem, { term: "Gender", children: _jsx(Text, { children: customer.Gender }, customer.CustId) }), _jsx(DefinitionItem, { term: "Mobile No", children: _jsx(Text, { children: customer.MobileNo }, customer.CustId) }), _jsx(DefinitionItem, { term: "DOB", children: _jsx(Text, { children: customer.DOB }, customer.CustId) }), _jsx(DefinitionItem, { term: "Present Address", children: _jsx(Text, { children: customer.PresentAddress }, customer.CustId) }), _jsx(DefinitionItem, { term: "Permanent Address", children: _jsx(Text, { children: customer.PermanentAddress }, customer.CustId) }), _jsx(DefinitionItem, { term: "Email", children: _jsx(Text, { children: customer.EmailId }, customer.CustId) }), _jsx(DefinitionItem, { term: "Date of Enrollment", children: _jsx(Text, { children: customer.DateOfEnrollment }, customer.CustId) }), _jsx(DefinitionItem, { term: "Status", children: _jsx(Text, { children: customer.Status }, customer.CustId) })] }));
};
export default CustomerAttributes;
