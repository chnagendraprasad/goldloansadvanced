import { jsx as _jsx } from "react/jsx-runtime";
import { Heading } from "@chakra-ui/react";
import useBranch from "../hooks/useBranch";
import useLoanType from "../hooks/useLoanType";
import useCustomerQueryStore from "../store";
const CustomerHeading = () => {
    const branchId = useCustomerQueryStore((s) => s.customerQuery.branchId);
    const branch = useBranch(branchId);
    const loantypeId = useCustomerQueryStore((s) => s.customerQuery.loantypeId);
    const loantype = useLoanType(loantypeId);
    const heading = `${loantype?.Name || ""} ${branch?.Mbri_Name || ""} Customers`;
    return (_jsx(Heading, { as: "h1", marginY: 5, fontSize: "5xl", children: heading }));
};
export default CustomerHeading;
