import { render, screen } from "@testing-library/react";
import React from "react";
import Cabecalho from ".";

test('a renderização do cabeçalho deve ocorrer sem problemas', () => {

    render(<Cabecalho />)

    const cabecalho = screen.getByRole('heading');
    const imagemLogo = screen.getByRole('banner');
    const imagemParticipante = screen.getByAltText('Participante com um presente na mão');

    expect(cabecalho).toBeInTheDocument();
    expect(cabecalho).toContainElement(imagemLogo);
    expect(cabecalho).toContainElement(imagemParticipante);
    expect(imagemLogo).toBeInTheDocument();
    expect(imagemLogo).toHaveAccessibleName();
    expect(imagemLogo).toBeVisible();
    expect(imagemParticipante).toBeInTheDocument();
    expect(imagemParticipante).toBeVisible();
    expect(imagemParticipante).toHaveAccessibleName();
});
