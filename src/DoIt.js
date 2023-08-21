import './styles/GlobalStyles.css'
import Menu from './components/Menu/Menu.js'

import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Tarefas from './components/Tarefas/Tarefas'
import CriarTarefa from './components/CriarTarefa/CriarTarefa'
import TarefasConcluidas from './components/TarefasConcluidas/TarefasConcluidas'
import Conquistas from './components/Conquistas/Conquistas'
import Configuracoes from './components/Configuracoes/Configuracoes'

const DoIt = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Tarefas/>}/>
        <Route path='criar-tarefa' element={<CriarTarefa/>}/>
        <Route path='tarefas-concluidas' element={<TarefasConcluidas/>}/>
        <Route path='conquistas' element={<Conquistas/>}/>
        <Route path='configuracoes' element={<Configuracoes/>}/>
      </Routes>
    </BrowserRouter>
  )

}

export default DoIt
