import { useQuery } from '@tanstack/react-query';
import ms from 'ms';
import branches from '../data/branches';
import APIClient from '../services/api-client';
import Branch from '../entities/Branch';

const apiClient = new APIClient<Branch>('/GetBranchesNew');

 const useBranches = () =>
   useQuery({
     queryKey: ['branches'],
     queryFn: apiClient.getAll,
     staleTime: ms('24h'),
     initialData: branches,
   });

// const useBranches = () => {
//   return useQuery<FetchResponse<Branch>, Error>({
//     queryKey: ['branches'],
//     queryFn: () => apiClient.getAll(),
//     staleTime: ms('24h'),
//     initialData: branches,
//   });
// };

 

export default useBranches;
