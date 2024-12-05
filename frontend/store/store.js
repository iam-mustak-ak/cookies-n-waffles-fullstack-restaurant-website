import { create } from "zustand";

const useStore = create((set) => ({
    shortMenuImage: "",
    setShortMenuImage: (url) =>
        set((state) => ({
            shortMenuImage: url,
        })),
}));

export default useStore;
