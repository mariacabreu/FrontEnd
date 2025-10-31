//Nome, email RA do aluno
import "./style.css";
import { useState } from "react";

export default function Aluno() {
    const [nome, setNome] = useState("Maria Clara Abreu");
    const [email, setEmail] = useState("mariaclaraabreu050");
    const [cpf, setCpf] = useState("123.456.789-00");
    return (
        <div className="aluno">
            <h2>Dados do Aluno</h2>
            <p><strong>Nome: </strong> {nome}</p>
            <p><strong>Email: </strong> {email}</p>
            <p><strong>CPF: </strong> {cpf}</p>
        </div>
    )
}
            