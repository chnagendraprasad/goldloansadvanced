import { useQuery } from '@tanstack/react-query';
import ms from 'ms';
import APIClient from '../services/api-client';
const apiClient = new APIClient('/GetBranchesNew');
const useBranches = () => useQuery(['branches'], apiClient.getAll, {
    staleTime: ms('24h'),
    // initialData: branches,
});
//  const useBranches = () =>
//    useQuery({
//      queryKey: ['branches'],
//      queryFn: apiClient.getAll,
//      staleTime: ms('24h'),
//      initialData: branches,
//    });
// const useBranches = () => {
//   return useQuery<FetchResponse<Branch>, Error>({
//     queryKey: ['branches'],
//     queryFn: () => apiClient.getAll(),
//     staleTime: ms('24h'),
//     initialData: branches,
//   });
// };
export default useBranches;
