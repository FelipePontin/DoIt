import React from "react"

import '../../styles/GlobalStyles.css'

import { FaSearch } from "react-icons/fa";
import { FaCheck, FaXmark, FaCircleInfo } from "react-icons/fa6";

import Menu from "../Menu/Menu"
import './Tarefas.css'

const Tarefas = () => {
    return (
        <section className='LayoutBase'>
            <Menu />
            <div className='Tarefas'>
                <div className='divisao_input_tarefas'>
                    <input type='text' className='input_tarefas' placeholder='Encontre alguma tarefa'></input>
                    <FaSearch className='icone_pesquisar_tarefas'/>
                </div>
                <div className='divisao_tarefas'>
                    <div className='divisao_tarefa'>
                        <div className='divisao_informacao_tarefa'>
                            <p className='nome_tarefa'>Estudar para a prova <FaCircleInfo className='informacao_tarefa'/></p>
                            <p className='data_tarefa'>15/07/2023 - 20:55</p>
                        </div>
                        <div className='divisao_icones_tarefas'>
                            <div className='divisao_icone_tarefa'>
                                <FaCheck className='icone_acao_tarefa'/>
                            </div>
                            <div className='divisao_icone_tarefa'>
                                <FaXmark className='icone_acao_tarefa'/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Tarefas
