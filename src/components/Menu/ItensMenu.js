import { FaList, FaPlus, FaCheck, FaGear, FaTrophy } from "react-icons/fa6"

const itensMenu = [
    { nome: 'Tarefas', icone: <FaList className='icone_navegacao' />, link: '/' },
    { nome: 'Criar Tarefa', icone: <FaPlus className='icone_navegacao' />, link: '/criar-tarefa' },
    { nome: 'Tarefas Concluidas', icone: <FaCheck className='icone_navegacao' />, link: '/tarefas-concluidas' },
    { nome: 'Conquistas', icone: <FaTrophy className='icone_navegacao' />, link: '/conquistas' },
    { nome: 'Configurações', icone: <FaGear className='icone_navegacao' />, link: '/configuracoes' }
]

export default itensMenu
