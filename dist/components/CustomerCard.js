import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Card, CardBody, Heading, HStack, Image } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import getCroppedImageUrl from "../services/image-url";
import TotalLoans from "./TotalLoans";
const CustomerCard = ({ customer }) => {
    return (_jsxs(Card, { children: [_jsx(Image, { src: getCroppedImageUrl(customer.CustomerPhotoBase64String) }), _jsxs(CardBody, { children: [_jsxs(HStack, { justifyContent: "space-between", marginBottom: 3, children: [_jsx(Heading, { fontSize: "2xl", children: customer.CustCode }), _jsx(TotalLoans, { score: customer.TotalLoans })] }), _jsx(Heading, { fontSize: "2xl", children: _jsx(Link, { to: "/customers/" + customer.CustId, children: customer.CustomerName }) })] })] }));
};
export default CustomerCard;
