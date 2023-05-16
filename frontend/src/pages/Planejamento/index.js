import React, { useState } from 'react';
import './style.css';
import Refeicao from '../../components/Refeicao'
import AddRefeicao from '../../components/AddRefeicao';
import EditRefeicao from '../../components/EditRefeicao';
import RemoveRefeicao from '../../components/RemoveRefeicao';
import Header from "../../components/Header"
import Footer from '../../components/Footer';
import divisoriaSvg from "../../assets/divisória.svg"
import plusSvg from "../../assets/plus.svg"
import editSvg from "../../assets/edit.svg"
import trashSvg from "../../assets/trash.svg"

const Planejamento = () => {

    const [addOpen, setAddOpen] = useState(false);
    const [editOpen, setEditOpen] = useState(false);
    const [deleteOpen, setDeleteOpen] = useState(false);

    const addOpenModal = () => {
        setAddOpen(true);
    };

    const addCloseModal = () => {
        setAddOpen(false);
    };

    const editOpenModal = () => {
        setEditOpen(true);
    }

    const editCloseModal = () => {
        setEditOpen(false);
    }

    const deleteOpenModal = () => {
        setDeleteOpen(true);
    }

    const deleteCloseModal = () => {
        setDeleteOpen(false);
    }

    return (
        <div className='bg-brancoamarelado'>
            <Header />

            <main class="p-8">
                <h1 class="text-3xl font-bold c-3D3D3D">Planejamento</h1>
                <h2 class="text-3xl font-light c-FF0038 ml-32">Semanal</h2>
                <div class="bg-F0F0F0 p-4 mt-8">
                    <div class="ml-8 mt-4 flex gap-50p">
                        <div class="flex gap-2">
                            <button class="bg-facefoodred p-4 rounded-full" onClick={addOpenModal}>
                                <img src={plusSvg} />
                            </button>
                            <button class="bg-facefoodred p-4 rounded-full" onClick={editOpenModal}>
                                <img src={editSvg} />
                            </button>
                            <button class="bg-facefoodred p-4 rounded-full" onClick={deleteOpenModal}>
                                <img src={trashSvg} />
                            </button>
                        </div>
                        <form class="h-10 rounded flex gap-2">
                            <input class="p-2" type="date" />
                            <p class="c-FF0038 font-bold text-1v5xl self-center">~</p>
                            <input class="p-2" type="date" />
                        </form>
                    </div>

                    <div class="flex justify-center mt-12">
                        <div class="mt-4 scroll-6 hide-scroll p-2">
                            <Refeicao />
                            <Refeicao />
                            <Refeicao />
                            <Refeicao />
                        </div>
                        <img class="mx-4" src={divisoriaSvg} />
                        <div class="mt-4 scroll-6 hide-scroll p-2">
                            <Refeicao />
                            <Refeicao />
                            <Refeicao />
                            <Refeicao />
                        </div>
                        <img class="mx-4" src={divisoriaSvg} />
                        <div class="mt-4 scroll-6 hide-scroll p-2">
                            <Refeicao />
                            <Refeicao />
                            <Refeicao />
                            <Refeicao />
                        </div>
                        <img class="mx-4" src={divisoriaSvg} />
                        <div class="mt-4 scroll-6 hide-scroll p-2">
                            <Refeicao />
                            <Refeicao />
                            <Refeicao />
                            <Refeicao />
                        </div>
                        <img class="mx-4" src={divisoriaSvg} />
                        <div class="mt-4 scroll-6 hide-scroll p-2">
                            <Refeicao />
                            <Refeicao />
                            <Refeicao />
                            <Refeicao />
                        </div>
                    </div>
                </div>
            </main>


            <AddRefeicao isOpen={addOpen} onClose={addCloseModal} />

            <EditRefeicao isOpen={editOpen} onClose={editCloseModal} />

            <RemoveRefeicao isOpen={deleteOpen} onClose={deleteCloseModal}/>

            <Footer />
        </div>
    )
}

export default Planejamento;