import { SimpleGrid, Spinner, Text } from "@chakra-ui/react";
import React from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import useCustomers from "../hooks/useCustomers";
import CustomerCard from "./CustomerCard";
import CustomerCardContainer from "./CustomerCardContainer";
import CustomerCardSkeleton from "./CustomerCardSkeleton";

const CustomerGrid = () => {
  const {
    data,
    error,
    isLoading,
    //isFetchingNextPage,
    //fetchNextPage,
    // hasNextPage,
  } = useCustomers();
  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8];

  if (error) return <Text>{error.message}</Text>;

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
    <SimpleGrid
      columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
      spacing={6}
      padding="10px"
    >
      {isLoading &&
        skeletons.map((skeleton) => (
          <CustomerCardContainer key={skeleton}>
            <CustomerCardSkeleton />
          </CustomerCardContainer>
        ))}
      {/* {data?.pages.map((page, index) => ( */}
      {/* <React.Fragment key={index}> */}
      {data?.results.map((customer) => (
        <CustomerCardContainer key={customer.CustId}>
          <CustomerCard customer={customer} />
        </CustomerCardContainer>
      ))}
      {/* </React.Fragment> */}
      {/* ))} */}
    </SimpleGrid>
    // </InfiniteScroll>
  );
};

export default CustomerGrid;
