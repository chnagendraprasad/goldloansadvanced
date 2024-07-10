import {
  Button,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
} from '@chakra-ui/react';
import { BsChevronDown } from 'react-icons/bs';
import useCustomerQueryStore from '../store';

const SortSelector = () => {
  const sortOrders = [
    { value: "", label: "Relevance" },
    { value: "totalloans", label: "Total Loans" },
    { value: "name", label: "Customer Name" },
    { value: "-name", label: "Customer Name in reverse" },
    // { value: "disbursed", label: "Date Disbursed" },
    // { value: "-disbursed", label: "Date Disbursed in reverse" },
  ];

  const setSortOrder = useCustomerQueryStore((s) => s.setSortOrder);
  const sortOrder = useCustomerQueryStore(
    (s) => s.customerQuery.sortOrder
  );
  const currentSortOrder = sortOrders.find(
    (order) => order.value === sortOrder
  );

  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        Order by: {currentSortOrder?.label || 'Relevance'}
      </MenuButton>
      <MenuList>
        {sortOrders.map((order) => (
          <MenuItem
            onClick={() => setSortOrder(order.value)}
            key={order.value}
            value={order.value}
          >
            {order.label}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default SortSelector;
