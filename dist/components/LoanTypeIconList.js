import { jsx as _jsx } from "react/jsx-runtime";
import { FaFileUpload, FaArrowCircleUp } from "react-icons/fa";
import { MdAutorenew } from "react-icons/md";
import { HStack, Icon } from "@chakra-ui/react";
const LoanTypeIconList = ({ loantypes = [] }) => {
    const iconMap = {
        L: FaFileUpload,
        T: FaArrowCircleUp,
        A: MdAutorenew,
    };
    return (_jsx(HStack, { marginY: 1, children: loantypes.map((loantypes) => (_jsx(Icon, { as: iconMap[loantypes.Type], color: "gray.500" }, loantypes.Id))) }));
};
export default LoanTypeIconList;
