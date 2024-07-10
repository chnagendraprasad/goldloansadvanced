import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Button, Text } from '@chakra-ui/react';
import { useState } from 'react';
const ExpandableText = ({ children }) => {
    const [expanded, setExpanded] = useState(false);
    const limit = 300;
    if (!children)
        return null;
    if (children.length <= limit)
        return _jsx(Text, { children: children });
    const summary = expanded ? children : children.substring(0, limit) + '...';
    return (_jsxs(Text, { children: [summary, _jsx(Button, { size: "xs", marginLeft: 1, fontWeight: "bold", colorScheme: "yellow", onClick: () => setExpanded(!expanded), children: expanded ? 'Show Less' : 'Read More' })] }));
};
export default ExpandableText;
