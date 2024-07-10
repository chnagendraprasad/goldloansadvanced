import { create } from 'zustand';
const useCustomerStore = create((set) => ({
    customerQuery: {},
    setSearchText: (searchText) => set(() => ({ customerQuery: { searchText } })),
    setBranchId: (branchId) => set((store) => ({
        customerQuery: { ...store.customerQuery, branchId, searchText: undefined },
    })),
    setLoantypeId: (loantypeId) => set((store) => ({
        customerQuery: {
            ...store.customerQuery,
            loantypeId,
            searchText: undefined,
        },
    })),
    setSortOrder: (sortOrder) => set((store) => ({
        customerQuery: { ...store.customerQuery, sortOrder },
    })),
}));
export default useCustomerStore;
