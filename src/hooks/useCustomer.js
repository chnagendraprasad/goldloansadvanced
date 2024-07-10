import { useQuery } from '@tanstack/react-query';
import APIClient from '../services/api-client';
const apiClient = new APIClient('/GetCustomerDataAndLoanDataByCustIdNew');
const useCustomer = (custId) => useQuery({
    queryKey: ['customers', custId],
    queryFn: () => apiClient.get(custId),
});
export default useCustomer;
