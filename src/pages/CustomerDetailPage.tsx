import { GridItem, Heading, SimpleGrid, Spinner, Text } from "@chakra-ui/react";
import React from "react";
import { useParams } from "react-router-dom";
import TotalLoans from "../components/TotalLoans";
import DefinitionItem from "../components/DefinitionItem";
import ExpandableText from "../components/ExpandableText";
import CustomerAttributes from "../components/CustomerAttributes";
import LoanAttributes from "../components/LoanAttributes";
import useCustomer from "../hooks/useCustomer";

const CustomerDetailPage = () => {
  const { custId } = useParams();
  const { data: customer, isLoading, error } = useCustomer(custId!);

  if (isLoading) return <Spinner />;

  if (error || !customer) throw error;

  return (
    <SimpleGrid columns={{ base: 1, md: 2 }} spacing={5}>
      <GridItem>
        <Heading>
          {customer.CustomerName} - {customer.CustomerCode}
        </Heading>
        <CustomerAttributes customer={customer} />
      </GridItem>
      <GridItem>
        <Heading>Loan Details</Heading>
        <LoanAttributes customer={customer} />
      </GridItem>
    </SimpleGrid>
  );
};

export default CustomerDetailPage;
