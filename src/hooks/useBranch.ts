import branches from '../data/branches';
import useBranches from './useBranches';

const useBranch = (id?: number) => {
  const { data: branches } = useBranches();
  return branches?.results.find((g) => g.Mbri_Id === id);
  //return branches[0]?.Mbri_Id === id;
};

export default useBranch;
