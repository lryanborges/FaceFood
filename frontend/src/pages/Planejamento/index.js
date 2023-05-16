import React from 'react';
import './style.css';
import Refeicao from '../../components/Refeicao'
import AddRefeicao from '../../components/AddRefeicao';
import Header from "../../components/Header"
import Footer from '../../components/Footer';
import divisoriaSvg from "../../assets/divisória.svg"
import plusSvg from "../../assets/plus.svg"
import editSvg from "../../assets/edit.svg"
import trashSvg from "../../assets/trash.svg"

const Planejamento = () => {
    return (
        <div className='bg-brancoamarelado'>
            <Header />

            <main class="p-8">
                <h1 class="text-3xl font-bold c-3D3D3D">Planejamento</h1>
                <h2 class="text-3xl font-light c-FF0038 ml-32">Semanal</h2>
                <div class="bg-F0F0F0 p-4 mt-8">
                    <div class="ml-8 mt-4 flex gap-50p">
                        <div class="flex gap-2">
                            <button class="bg-facefoodred p-4 rounded-full" onClick="openAddRefeicao()">
                                <img src={plusSvg} />
                            </button>
                            <button class="bg-facefoodred p-4 rounded-full" onclick="openEditRefeicao()">
                                <img src={editSvg} />
                            </button>
                            <button class="bg-facefoodred p-4 rounded-full" onclick="openDeleteRefeicao()">
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

            <section class="edit bg-add-edit w-full h-full-screen fixed top-0 z-50 hidden">
            <AddRefeicao/>
            </section>

            <section class="delete bg-add-edit w-full h-full fixed top-0 z-50 hidden">
                <div class="absolute middle">
                    <div class="bg-brancoamarelado flex w-160 p-8 items-center justify-center rounded">
                        <h2 class="c-001701 textatt-2xl font-bold">Confirmar exclusão?</h2>
                        <div class="ml-16">
                            <button class="bg-brancoamarelado c-3D3D3D border-2 border-3D3D3D p-1 px-8 rounded"
                                onclick="closeDelete()">Sim</button>
                            <button class="bg-3D3D3D c-F1F9E4 border-2 border-3D3D3D p-1 px-8 rounded"
                                onclick="closeDelete()">Não</button>
                        </div>
                    </div>
                </div>
            </section>

            <Footer/>
        </div>
    )
}

export default Planejamento;