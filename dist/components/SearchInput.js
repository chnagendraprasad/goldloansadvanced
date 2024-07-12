import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { useRef } from "react";
import { BsSearch } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import useCustomerQueryStore from "../store";
const SearchInput = () => {
    const ref = useRef(null);
    const setSearchText = useCustomerQueryStore(s => s.setSearchText);
    const navigate = useNavigate();
    return (_jsx("form", { onSubmit: (event) => {
            event.preventDefault();
            if (ref.current) {
                setSearchText(ref.current.value);
                navigate('/');
            }
        }, children: _jsxs(InputGroup, { children: [_jsx(InputLeftElement, { children: _jsx(BsSearch, {}) }), _jsx(Input, { ref: ref, borderRadius: 20, placeholder: "Search Customer Name, Code, Mobile Number...", variant: "filled" })] }) }));
};
export default SearchInput;
