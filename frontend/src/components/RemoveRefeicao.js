import React from 'react';
import './style.css';
import { api } from '../services/api';

const RemoveRefeicao = ({ isOpen, onClose,  id, fetchRefeicoes }) => {

    const removeRefeicao = async () => {
        const response = await api.delete(`/api/refeicao/id/${id}`)
        console.log(response)
        onClose()
        fetchRefeicoes()
    }

    if (!isOpen) {
        return null;
    }

    return (
        <section class="delete bg-add-edit w-full h-full fixed top-0 z-50">
            <div class="absolute middle">
                <div class="bg-brancoamarelado flex w-160 p-8 items-center justify-center rounded">
                    <h2 class="c-001701 textatt-2xl font-bold">Confirmar exclusão?</h2>
                    <div class="ml-12">
                        <button class="bg-brancoamarelado c-3D3D3D border-2 border-3D3D3D p-1 px-8 rounded mr-2"
                            onClick={removeRefeicao}>Sim</button>
                        <button class="bg-3D3D3D c-F1F9E4 border-2 border-3D3D3D p-1 px-8 rounded"
                            onClick={onClose}>Não</button>
                    </div>
                </div>
            </div>
        </section>
    )

}

export default RemoveRefeicao;