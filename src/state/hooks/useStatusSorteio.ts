import { useRecoilValue, useSetRecoilState } from "recoil"
import { listaParticipantesState, statusSorteio } from "../atom"

export const useStatusSorteio = () => {
    return useRecoilValue(statusSorteio);
}

export const useSetStatusSorteio = () => {
    const listaDeParticipantes = useRecoilValue(listaParticipantesState);
    const setStatus = useSetRecoilState(statusSorteio);
    
    return (status: boolean) => {
        if (listaDeParticipantes.length < 3) {
            return;
        }
        setStatus(status);
    }
};
