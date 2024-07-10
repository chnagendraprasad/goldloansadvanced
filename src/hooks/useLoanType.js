import useLoanTypes from './useLoanTypes';
const useLoanType = (id) => {
    const { data: loanTypes } = useLoanTypes();
    return loanTypes?.results.find((p) => p.Id === id);
};
export default useLoanType;
