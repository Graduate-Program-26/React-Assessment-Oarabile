import {create} from "zustand"

interface Store{
    isLight : boolean;
    searchInput : string;
    setSearchInput: (value: string) => void;
    setLightMode: () => void;
}

const useStore = create<Store>((set) =>({
    //inititial values
    isLight : false,
    searchInput: "",
    setSearchInput: (value : string) =>{
        set(() =>({
           searchInput : value, 
        }))
    },
    setLightMode: () =>{
        set((state) => ({
            isLight: !state.isLight
        }))
    }   
}))

export default useStore;