import { useQuery } from '@tanstack/react-query';
import APIClient from '../services/api-client';
import CustomerwithLoanDetails from '../entities/CustomerwithLoanDetails';

const apiClient = new APIClient<CustomerwithLoanDetails>('/GetCustomerDataAndLoanDataByCustIdNew');

const useCustomer = (custId: string) =>
  useQuery({
    queryKey: ['customers', custId],
    queryFn: () => apiClient.get(custId),
  });

export default useCustomer;