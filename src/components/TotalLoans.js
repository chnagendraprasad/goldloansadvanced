import { jsx as _jsx } from "react/jsx-runtime";
import { Badge } from '@chakra-ui/react';
const TotalLoans = ({ score }) => {
    let color = score > 1 ? 'green' : score > 2 ? 'yellow' : '';
    return (_jsx(Badge, { colorScheme: color, fontSize: '14px', paddingX: 2, borderRadius: '4px', children: score }));
};
export default TotalLoans;
