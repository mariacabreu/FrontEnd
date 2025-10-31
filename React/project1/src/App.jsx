import './App.css'
import Aluno from './components/Aluno'
import Mensagem from './components/Mensagem'
import InfoCurso from './components/InfoCurso'

export default function App() {
  return (
    <>
      <h1>Bem vindo</h1>
      <h1>Maria Clara</h1>
      <Mensagem />
      <InfoCurso />
      <Aluno />
    </>
  )
}
