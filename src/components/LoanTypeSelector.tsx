import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import useLoanType from '../hooks/useLoanType';
import useLoanTypes from '../hooks/useLoanTypes';
import useCustomerQueryStore from '../store';

const LoanTypeSelector = () => {
  const { data, error } = useLoanTypes();
  const setSelectedLoanTypeId = useCustomerQueryStore(s => s.setLoantypeId);
  const selectedLoanTypeId = useCustomerQueryStore(s => s.customerQuery.loantypeId);
  const selectedLoanType = useLoanType(selectedLoanTypeId);

  if (error) return null;

  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        {selectedLoanType?.Name || 'LoanTypes'}
      </MenuButton>
      <MenuList>
        {data?.results.map((loantype) => (
          <MenuItem
            onClick={() => setSelectedLoanTypeId(loantype.Id)}
            key={loantype.Id}
          >
            {loantype.Name}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default LoanTypeSelector;

