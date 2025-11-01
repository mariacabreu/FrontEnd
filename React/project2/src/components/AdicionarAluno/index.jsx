import React, { useState } from 'react';
import './style.css';

export default function AdicionarAluno() {
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [listaAlunos, setListaAlunos] = useState([]);

    const adicionarAluno = (event) => {
        event.preventDefault();
        if (nome && email) {
            setListaAlunos([...listaAlunos, { nome, email }]);
            setNome('');
            setEmail('');
        }
    };

    return (
        <div className="container">
            {/* Coluna ESQUERDA - Formulário */}
            <div className="formulario">
                <h2>Adicionar Aluno</h2>
                <form onSubmit={adicionarAluno}>
                    <input
                        type="text"
                        placeholder="Nome"
                        value={nome}
                        onChange={(e) => setNome(e.target.value)}
                    />
                    <input
                        type="email"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <button type="submit">Adicionar</button>
                </form>
            </div>

            {/* Coluna DIREITA - Lista */}
            <div className="lista-alunos">
                <h3>Matriculados</h3>
                {listaAlunos.length === 0 ? (
                    <p>Nenhum aluno matriculado ainda.</p>
                ) : (
                    <ol>
                        {listaAlunos.map((aluno, index) => (
                            <li key={index}>
                                {aluno.nome} - {aluno.email}
                            </li>
                        ))}
                    </ol>
                )}
            </div>
        </div>
    );
}
