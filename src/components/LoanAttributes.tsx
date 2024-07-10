import React from "react";
import { SimpleGrid, Text, Image, Box } from "@chakra-ui/react";
import CustomerwithLoanDetails from "../entities/CustomerwithLoanDetails";
import DefinitionItem from "./DefinitionItem";
import getCroppedImageUrl from "../services/image-url";

interface Props {
  customer: CustomerwithLoanDetails;
}

const LoanAttributes = ({ customer }: Props) => {
  return (
    <SimpleGrid columns={{ base: 1, md: 2 }} spacing={2}>
      {customer?.Ticket_Details.map((loan) => (
        <Box
          key={loan.Ticket_Id}
          borderWidth="1px"
          borderRadius="lg"
          overflow="hidden"
          p={4}
          mb={4}
        >
          <DefinitionItem term="Loan Number">
            <Text>{loan.Ticket_No}</Text>
          </DefinitionItem>
          <DefinitionItem term="Is Topup Loan?">
            <Text>{loan.TopUp_Flag}</Text>
          </DefinitionItem>
          <DefinitionItem term="Is Auto Renewal Loan?">
            <Text>{loan.AutoRenewal}</Text>
          </DefinitionItem>
          <DefinitionItem term="Disbursement Date">
            <Text>{loan.Disbursement_Date1.substring(0, 10)}</Text>
          </DefinitionItem>
          <DefinitionItem term="Loan Amount">
            <Text>{loan.Loan_Amount}</Text>
          </DefinitionItem>
          <DefinitionItem term="Cash Amount">
            <Text>{loan.CashAmount}</Text>
          </DefinitionItem>
          <DefinitionItem term="Bank Amount">
            <Text>{loan.BankAmount}</Text>
          </DefinitionItem>
          <DefinitionItem term="Processing Fee">
            <Text>{loan.Processing_Fee}</Text>
          </DefinitionItem>
          <DefinitionItem term="OS Capital">
            <Text>{loan.OS_Capital}</Text>
          </DefinitionItem>
          <DefinitionItem term="Bank Account Verification Status">
            <Text>{loan.BankAccountVerificationStatus}</Text>
          </DefinitionItem>
          <DefinitionItem term="Loan Amount Disbursement Status">
            <Text>{loan.LoanAmountDisbursementStatus}</Text>
          </DefinitionItem>
          <Image
            alt="Ornament Bulk Image"
            src={getCroppedImageUrl(loan.MGLTD_ARTICLEIMG)}
            mt={4}
            borderRadius="md"
          />
        </Box>
      ))}
    </SimpleGrid>
  );
};

export default LoanAttributes;
