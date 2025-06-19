import { create } from 'zustand';


export const useStore = create<{
    explorerUrl: string | undefined;
    setExplorerUrl: (newUrl: string) => void
}>((set) => ({
    explorerUrl: undefined,
    setExplorerUrl: (newUrl) => set(() => ({ explorerUrl: newUrl })),
}));