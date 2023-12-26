import { atom } from "recoil";

export const listaParticipantesState = atom<string[]>({
    key: 'listaDeParticipantesState',
    default: []
});

export const resultadoAmigoSecreto = atom<Map<string, string>>({
    key: 'resultadoAmigoSecreto',
    default: new Map()
});

export const erroState = atom<string>({
    key: 'erroState',
    default: ''
});

export const statusSorteio = atom<boolean>({
    key: 'statusSorteio',
    default: true
});