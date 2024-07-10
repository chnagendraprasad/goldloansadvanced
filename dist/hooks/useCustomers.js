import { useQuery } from '@tanstack/react-query';
import ms from 'ms';
import APIClient from '../services/api-client';
import useCustomerQueryStore from '../store';
const apiClient = new APIClient('/GetCustomersNew');
const useCustomers = () => {
    const customerQuery = useCustomerQueryStore((s) => s.customerQuery);
    return useQuery({
        queryKey: ['customers', customerQuery],
        queryFn: async () => {
            const response = await apiClient.getAll({
                BranchId: customerQuery.branchId,
                LoanType: customerQuery.loantypeId,
                Ordering: customerQuery.sortOrder,
                Search: customerQuery.searchText,
            });
            return response;
        },
        staleTime: ms('24h'),
    });
};
export default useCustomers;
