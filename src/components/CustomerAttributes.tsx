import { SimpleGrid, Text } from "@chakra-ui/react";
import CustomerwithLoanDetails from "../entities/CustomerwithLoanDetails";
import TotalLoans from "./TotalLoans";
import DefinitionItem from "./DefinitionItem";

interface Props {
  customer: CustomerwithLoanDetails;
}

const CustomerAttributes = ({ customer }: Props) => {
  return (
    <SimpleGrid columns={2} as="dl">
      <DefinitionItem term="Branch Name">
        <Text key={customer.CustId}>{customer.BranchName}</Text>
      </DefinitionItem>
      <DefinitionItem term="Gender">
        <Text key={customer.CustId}>{customer.Gender}</Text>
      </DefinitionItem>
      <DefinitionItem term="Mobile No">
        <Text key={customer.CustId}>{customer.MobileNo}</Text>
      </DefinitionItem>
      <DefinitionItem term="DOB">
        <Text key={customer.CustId}>{customer.DOB}</Text>
      </DefinitionItem>
      <DefinitionItem term="Present Address">
        <Text key={customer.CustId}>{customer.PresentAddress}</Text>
      </DefinitionItem>
      <DefinitionItem term="Permanent Address">
        <Text key={customer.CustId}>{customer.PermanentAddress}</Text>
      </DefinitionItem>
      <DefinitionItem term="Email">
        <Text key={customer.CustId}>{customer.EmailId}</Text>
      </DefinitionItem>
      <DefinitionItem term="Date of Enrollment">
        <Text key={customer.CustId}>{customer.DateOfEnrollment}</Text>
      </DefinitionItem>
      <DefinitionItem term="Status">
        <Text key={customer.CustId}>{customer.Status}</Text>
      </DefinitionItem>
    </SimpleGrid>
  );
};

export default CustomerAttributes;
