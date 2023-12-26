import realizarSorteio from "./realizarSorteio";

describe('dado um sorteio de amigo secreto', () => {
    test('cada participante não sorteie o próprio nome', () => {
        const participantes = [
            'Ana',
            'Catarina',
            'João',
            'Jiliana',
            'Vinicius',
            'Sérgio',
            'Maria'
        ];

        const sorteio: Map<string, string> = realizarSorteio(participantes);
        participantes.forEach(participante => {
            const amigoSecreto = sorteio.get(participante);
            expect(amigoSecreto).not.toEqual(participante);
        });
    });
});