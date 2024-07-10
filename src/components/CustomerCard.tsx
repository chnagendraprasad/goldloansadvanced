import { Card, CardBody, Heading, HStack, Image } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import Customer from "../entities/Customer";
import getCroppedImageUrl from "../services/image-url";
import TotalLoans from "./TotalLoans";
import Emoji from "./Emoji";
import LoanTypeIconList from "./LoanTypeIconList";

interface Props {
  customer: Customer;
}

const CustomerCard = ({ customer }: Props) => {
  return (
    <Card>
      <Image src={getCroppedImageUrl(customer.CustomerPhotoBase64String)} />
      <CardBody>
        <HStack justifyContent="space-between" marginBottom={3}>
          <Heading fontSize="2xl">{customer.CustCode}</Heading>
          {/* <LoanTypeIconList loantypes={customer.CustCode} /> */}
          <TotalLoans score={customer.TotalLoans} />
        </HStack>
        <Heading fontSize="2xl">
          <Link to={"/customers/" + customer.CustId}>
            {customer.CustomerName}
          </Link>
          {/* <Emoji rating={customer.LoanAmount} />*/}
        </Heading>
      </CardBody>
    </Card>
  );
};

export default CustomerCard;
