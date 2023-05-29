import { create } from "zustand"

interface ScriptModalStore {
    isOpen: boolean;
    onOpen: () => void;
    onClose: () => void;
};

const useScriptModal = create<ScriptModalStore>((set) => ({
    isOpen: false,
    onOpen: () => set({isOpen: true}),
    onClose: () => set({isOpen: false}),
}));

export default useScriptModal;