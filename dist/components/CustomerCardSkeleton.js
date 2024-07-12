import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Card, CardBody, Skeleton, SkeletonText } from '@chakra-ui/react';
const CustomerCardSkeleton = () => {
    return (_jsxs(Card, { children: [_jsx(Skeleton, { height: "200px" }), _jsx(CardBody, { children: _jsx(SkeletonText, {}) })] }));
};
export default CustomerCardSkeleton;
