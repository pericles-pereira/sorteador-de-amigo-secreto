import { useEffect, useState } from "react";
import { useListaDeParticipantes } from "../../state/hooks/useListaDeParticipantes";
import { useResultadoSorteio } from "../../state/hooks/useResultadoSorteio";
import Card from "../../components/Card";
import styled from "styled-components";
import { useStatusSorteio } from "../../state/hooks/useStatusSorteio";
import { useNavigate } from "react-router-dom";

const Rodape = styled.footer`
  margin: 64px 0;
`;

const Resultado = styled.p`
  color: #fe652bfc;
  font-size: 25px;
`;

const Botao = styled.button`
  width: 350px;
  height: 80px;
  font-size: 20px;
  box-shadow: 2px 2px 0px 1px #000000;
  border-radius: 45px;
  background-color: #fe652b;
  color: #fff;
  cursor: pointer;
  margin: 16px 0;

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }

  &:hover {
    background-color: #4b69fd;
  }

  @media screen and (max-width: 800px) {
    width: 220px;
    margin: 32px 0;
  }
`;

const Selecionar = styled.select`
  border-radius: 45px;
  height: 82px;
  width: 70%;
  box-sizing: border-box;
  padding: 0 32px;
  font-size: 20px;
  border: 2px solid black;
  box-shadow: 0px 2px 0px 1px #000000;

  &:focus {
    outline: none;
  }

  @media screen and (max-width: 800px) {
    width: 100%;
  }
`;

const Paragrafo = styled.p`
  font-size: 20px;
  font-weight: 200;
  margin: 32px 0;
`;

const Sorteio = () => {
  const participantes = useListaDeParticipantes();

  const [participantesRestantes, setParticipantesRestantes] = useState<string[]>(participantes);

  const [participanteDaVez, setParticipanteDaVez] = useState("");
  const [amigoScreto, setAmigoSecreto] = useState("");

  const resultado = useResultadoSorteio();
  const status = useStatusSorteio();
  const navigate = useNavigate();

  useEffect(() => {
    if (status === true) {
      navigate('/');
    };
  }, []);

  const sortear = (evento: React.FormEvent<HTMLFormElement>) => {
    evento.preventDefault();
    if (resultado.has(participanteDaVez)) {
      setAmigoSecreto(resultado.get(participanteDaVez)!);
      setTimeout(() => {
        setParticipantesRestantes(participantesRestantes.filter(participante => participante !== participanteDaVez));
        setAmigoSecreto('');
      }, 5000);
    }
  };

  return (
    <Card>
      <section>
        <h2>Quem vai tirar o papelzinho?</h2>
        <form onSubmit={sortear}>
          <Selecionar
            required
            name="participanteDavez"
            id="participanteDavez"
            placeholder="Selecione o seu nome"
            value={participanteDaVez}
            onChange={(evento: React.ChangeEvent<HTMLSelectElement>) => {
              setParticipanteDaVez(evento.target.value);
              setAmigoSecreto('');
              }
            }
          >
            <option>Selecione seu nome</option>
            {participantesRestantes.map((participante) => (
              <option key={participante}>{participante}</option>
            ))}
          </Selecionar>
          <Paragrafo>
            Clique em sortear para ver quem é seu amigo secreto!
          </Paragrafo>
          <Botao disabled={!participantesRestantes.includes(participanteDaVez)}>Sortear</Botao>
        </form>
        {amigoScreto && <Resultado role="alert">{amigoScreto}</Resultado>}
        <Rodape>
          <img
            src="/imagens/aviao.png"
            alt="Um desenho de um avião de papel"
          />
        </Rodape>
      </section>
    </Card>
  );
};

export default Sorteio;
