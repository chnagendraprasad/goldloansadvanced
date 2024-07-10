import { create } from 'zustand';

interface CustomerQuery {
  branchId?: number;
  loantypeId?: number;
  sortOrder?: string;
  searchText?: string;
}

interface CustomerStore {
  customerQuery: CustomerQuery;
  setSearchText: (searchText: string) => void;
  setBranchId: (branchId: number) => void;
  setLoantypeId: (loantypeId: number) => void;
  setSortOrder: (sortOrder: string) => void;
}

const useCustomerStore = create<CustomerStore>((set) => ({
    customerQuery: {},
  setSearchText: (searchText) =>
    set(() => ({ customerQuery: { searchText } })),
  setBranchId: (branchId) =>
    set((store) => ({
        customerQuery: { ...store.customerQuery, branchId, searchText: undefined },
    })),
    setLoantypeId: (loantypeId) =>
    set((store) => ({
        customerQuery: {
        ...store.customerQuery,
        loantypeId,
        searchText: undefined,
      },
    })),
  setSortOrder: (sortOrder) =>
    set((store) => ({
        customerQuery: { ...store.customerQuery, sortOrder },
    })),
}));

export default useCustomerStore;
