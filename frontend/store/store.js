import { create } from "zustand";

const useStore = create((set) => ({
    shortMenuItem: {
        url: "",
        id: "",
    },
    setShortMenuImage: ({ url, id }) =>
        set((state) => ({
            shortMenuItem: {
                ...state.shortMenuItem,
                url,
                id,
            },
        })),
}));

export default useStore;
