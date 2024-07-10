import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { Button, Heading, HStack, Image, List, ListItem, Spinner } from '@chakra-ui/react';
import useBranches from '../hooks/useBranches';
import getCroppedImageUrl from '../services/image-url';
import useCustomerQueryStore from '../store';
const BranchList = () => {
    const { data, isLoading, error } = useBranches();
    const selectedBranchId = useCustomerQueryStore(s => s.customerQuery.branchId);
    const setSelectedBranchId = useCustomerQueryStore(s => s.setBranchId);
    if (error)
        return null;
    if (isLoading)
        return _jsx(Spinner, {});
    return (_jsxs(_Fragment, { children: [_jsx(Heading, { fontSize: "2xl", marginTop: 9, marginBottom: 3, children: "Branches" }), _jsx(List, { children: data?.results.map((branch) => (_jsx(ListItem, { paddingY: "5px", children: _jsxs(HStack, { children: [_jsx(Image, { boxSize: "32px", borderRadius: 8, objectFit: "cover", src: getCroppedImageUrl(branch.image_branch) }), _jsx(Button, { whiteSpace: "normal", textAlign: "left", fontWeight: branch.Mbri_Id === selectedBranchId
                                    ? 'bold'
                                    : 'normal', onClick: () => setSelectedBranchId(branch.Mbri_Id), fontSize: "md", variant: "link", children: branch.Mbri_Name })] }) }, branch.Mbri_Id))) })] }));
};
export default BranchList;
