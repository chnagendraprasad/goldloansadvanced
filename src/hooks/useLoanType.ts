import useLoanTypes from './useLoanTypes';

const useLoanType = (id?: number) => {
  const { data: loanTypes } = useLoanTypes();
  return loanTypes?.results.find((p) => p.Id === id);
};

export default useLoanType;
