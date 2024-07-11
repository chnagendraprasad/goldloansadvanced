import { useQuery } from '@tanstack/react-query';
import ms from 'ms';
import APIClient from '../services/api-client';
const apiClient = new APIClient('/GetLoanTypesNew');
// const useLoanTypes = () =>
//   useQuery({
//     queryKey: ['loantypes'],
//     queryFn: apiClient.getAll,
//     staleTime: ms('24h'),
//     initialData: loantypes,
//   });
const useLoanTypes = () => useQuery(['loantypes'], apiClient.getAll, {
    staleTime: ms('24h'),
    // initialData: loantypes,
});
export default useLoanTypes;
