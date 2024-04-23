import { create } from 'zustand';
import { persist } from 'zustand/middleware';

const useStore = create(
    persist((set) => ({
        pm: null,
        currentSite: null,
        setPm: (pm) => set(() => ({ pm })),
        setSite: (site) => set(() => ({ currentSite: site })),
    }),
    {
        name: 'das-storage',
    }),
);
  
export default useStore;