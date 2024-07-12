import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { SimpleGrid, Text } from "@chakra-ui/react";
import useCustomers from "../hooks/useCustomers";
import CustomerCard from "./CustomerCard";
import CustomerCardContainer from "./CustomerCardContainer";
import CustomerCardSkeleton from "./CustomerCardSkeleton";
const CustomerGrid = () => {
    const { data, error, isLoading,
    //isFetchingNextPage,
    //fetchNextPage,
    // hasNextPage,
     } = useCustomers();
    const skeletons = [1, 2, 3, 4, 5, 6, 7, 8];
    if (error)
        return _jsx(Text, { children: error.message });
    // const fetchedCustomersCount =
    //   data?.pages.reduce(
    //     (total, page) => total + page.results.length,
    //     0
    //   ) || 0;
    return (
    // <InfiniteScroll
    //   dataLength={fetchedCustomersCount}
    //   hasMore={!!hasNextPage}
    //   next={() => fetchNextPage()}
    //   loader={<Spinner />}
    // >
    _jsxs(SimpleGrid, { columns: { sm: 1, md: 2, lg: 3, xl: 4 }, spacing: 6, padding: "10px", children: [isLoading &&
                skeletons.map((skeleton) => (_jsx(CustomerCardContainer, { children: _jsx(CustomerCardSkeleton, {}) }, skeleton))), data?.results.map((customer) => (_jsx(CustomerCardContainer, { children: _jsx(CustomerCard, { customer: customer }) }, customer.CustId)))] })
    // </InfiniteScroll>
    );
};
export default CustomerGrid;
