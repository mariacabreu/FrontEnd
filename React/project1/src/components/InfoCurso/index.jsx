import "./style.css";
import { useState } from "react";

export default function InfoCurso() {
    //Criando variáveis
    //UseState é uma função do React
    //Também chamada de Hooks
    const [nome, setNome] = useState("Desenvolvimento de Sistemas");
    const [cargaHoraria, setCargaHoraria] = useState(1200);
    const [instituicao, setInstituicao] = useState("Senai");
    return (
        <div className="info-curso">
            <h2>Dados do curso</h2>
            <p><strong>Nome: </strong> { nome } </p>
            <p><strong>Duração: </strong> { cargaHoraria }horas</p>
            <p><strong>Instituição: </strong> { instituicao }</p>
        </div>
    )
}