import { useQuery } from '@tanstack/react-query';
import ms from 'ms';
import loantypes from '../data/loantypes';
import APIClient from '../services/api-client';
import LoanType from '../entities/LoanType';

const apiClient = new APIClient<LoanType>(
  '/GetLoanTypesNew'
);

const useLoanTypes = () =>
  useQuery({
    queryKey: ['loantypes'],
    queryFn: apiClient.getAll,
    staleTime: ms('24h'),
    initialData: loantypes,
  });

export default useLoanTypes;

