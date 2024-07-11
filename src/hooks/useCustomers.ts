import { useQuery,useInfiniteQuery } from '@tanstack/react-query';
import ms from 'ms';
import APIClient, {FetchResponse,} from '../services/api-client';
import useCustomerQueryStore from '../store';
import Customer from '../entities/Customer';

const apiClient = new APIClient<Customer>('/GetCustomersNew');

const useCustomers = () => {
  const customerQuery = useCustomerQueryStore((s) => s.customerQuery);

  return useQuery<FetchResponse<Customer>, Error>({
    queryKey: ['customers', customerQuery],
    queryFn: () => apiClient.getAll({
      params: {
        BranchId: customerQuery.branchId,
        LoanType: customerQuery.loantypeId,
        Ordering: customerQuery.sortOrder,
        Search: customerQuery.searchText,
      }
    }),
    staleTime: ms('24h'),
  });
};

//   return useQuery<FetchResponse<Customer>, Error>({
//     queryKey: ['customers', customerQuery],
//     queryFn: async () => {
//       const response = await apiClient.getAll({
//         BranchId: customerQuery.branchId,
//         LoanType: customerQuery.loantypeId,
//         Ordering: customerQuery.sortOrder,
//         Search: customerQuery.searchText,
//       });
//       return response;
//     },
//     staleTime: ms('24h'),
//   });
// };

export default useCustomers;
