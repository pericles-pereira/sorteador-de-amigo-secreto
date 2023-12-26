import { useNavigate } from "react-router-dom";
import Card from "../../components/Card";
import Formulario from "../../components/Formulario/Formulario";
import ListaParticipantes from "../../components/ListaParticipantes";
import Rodape from "../../components/Rodape";
import { useStatusSorteio } from "../../state/hooks/useStatusSorteio";
import { useEffect } from "react";

const Configuracao = () => {
    const navigate = useNavigate();
    const status = useStatusSorteio();

    useEffect(() => {
        if (status === false) {
            navigate('/sorteio');
        };
    }, []);

    return (
        <Card>
            <section>
                <h2>Vamos Começar!</h2>
                <Formulario />
                <ListaParticipantes />
                <Rodape />
            </section>
        </Card>
    );
};

export default Configuracao;