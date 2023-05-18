import React, { useState, useEffect } from 'react';
import './style.css';
import Refeicao from '../../components/Refeicao'
import AddRefeicao from '../../components/AddRefeicao';
import EditRefeicao from '../../components/EditRefeicao';
import RemoveRefeicao from '../../components/RemoveRefeicao';
import Header from "../../components/Header"
import Footer from '../../components/Footer';
import { api } from '../../services/api';
import divisoriaSvg from "../../assets/divisória.svg"
import plusSvg from "../../assets/plus.svg"
import editSvg from "../../assets/edit.svg"
import trashSvg from "../../assets/trash.svg"

const Planejamento = () => {

    const [addOpen, setAddOpen] = useState(false);
    const [editOpen, setEditOpen] = useState(false);
    const [deleteOpen, setDeleteOpen] = useState(false);
    const [refeicoes, setRefeicoes] = useState([]);
    const [data, setData] = useState();
    const [idUser, setIdUser] = useState();
    const [isSelected, setIsSelected] = useState(false);
    const [idSelected, setIdSelected] = useState();

    useEffect(() => {
        fetchRefeicoes();
        setIdUser(localStorage.getItem('id'))
    }, []);

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

    const fetchRefeicoes = async () => {
        const response = await api.get("/api/refeicao");
        console.log(response.data)
        setRefeicoes(response.data);
    };

    const filteredRefeicoes = refeicoes.filter(
        (refeicao) =>
            refeicao.user.id == localStorage.getItem('id')
    );

    const handleChangeData = (e) => {
        setData(e.target.value)
    }

    const createRotina = async () => {
        const response = await api.post("/api/rotina", {
            listaRefeicoes: filteredRefeicoes,
            user: { id: idUser },
            data: data,
        })
    }

    const handleIdSelected = async (value) => {
        setIdSelected(value)
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
                            <input class="p-2 ml-16" type="date"
                                onChange={handleChangeData}
                            />
                            <button class="bg-facefoodred px-4 py-2 text-white rounded-50p ml-4"
                                onClick={createRotina}
                            >adicionar rotina</button>
                        </form>
                    </div>

                    <div class="flex justify-center mt-12">
                        <div className={isSelected ? ("border border-facefoodred rounded-50p mt-4 scroll-6 hide-scroll p-2 cursor-pointer") : ("mt-4 scroll-6 hide-scroll p-2 cursor-pointer")}>
                            <p class="ml-20">seg.</p>
                            {filteredRefeicoes.map((refeicao, index) => (
                                <div key={index} onClick={() => handleIdSelected(refeicao.id)}>
                                    <div>
                                        {refeicao.pratos.map((prato, index) => (
                                            <Refeicao key={prato.id} id={prato.id} pratos={prato.nome} horario={refeicao.horario} />
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                        <img class="mx-4" src={divisoriaSvg} />
                        <div className={isSelected ? ("border border-facefoodred rounded-50p mt-4 scroll-6 hide-scroll p-2 cursor-pointer") : ("mt-4 scroll-6 hide-scroll p-2 cursor-pointer")}>
                            <p class="ml-20">ter.</p>
                            {filteredRefeicoes.map((refeicao, index) => (
                                <div>
                                    {refeicao.pratos.map((prato, index) => (
                                        <Refeicao pratos={prato.nome} horario={refeicao.horario} />
                                    ))}
                                </div>
                            ))}
                        </div>
                        <img class="mx-4" src={divisoriaSvg} />
                        <div className={isSelected ? ("border border-facefoodred rounded-50p mt-4 scroll-6 hide-scroll p-2 cursor-pointer") : ("mt-4 scroll-6 hide-scroll p-2 cursor-pointer")}>
                            <p class="ml-20">qua.</p>
                            {filteredRefeicoes.map((refeicao, index) => (
                                <div>
                                    {refeicao.pratos.map((prato, index) => (
                                        <Refeicao pratos={prato.nome} horario={refeicao.horario} />
                                    ))}
                                </div>
                            ))}
                        </div>
                        <img class="mx-4" src={divisoriaSvg} />
                        <div className={isSelected ? ("border border-facefoodred rounded-50p mt-4 scroll-6 hide-scroll p-2 cursor-pointer") : ("mt-4 scroll-6 hide-scroll p-2 cursor-pointer")}>
                            <p class="ml-20">qui.</p>
                            {filteredRefeicoes.map((refeicao, index) => (
                                <div>
                                    {refeicao.pratos.map((prato, index) => (
                                        <Refeicao pratos={prato.nome} horario={refeicao.horario} />
                                    ))}
                                </div>
                            ))}
                        </div>
                        <img class="mx-4" src={divisoriaSvg} />
                        <div className={isSelected ? ("border border-facefoodred rounded-50p mt-4 scroll-6 hide-scroll p-2 cursor-pointer") : ("mt-4 scroll-6 hide-scroll p-2 cursor-pointer")}>
                            <p class="ml-20">sex.</p>
                            {filteredRefeicoes.map((refeicao, index) => (
                                <div>
                                    {refeicao.pratos.map((prato, index) => (
                                        <Refeicao pratos={prato.nome} horario={refeicao.horario} />
                                    ))}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </main>


            <AddRefeicao fetchRefeicoes={fetchRefeicoes} isOpen={addOpen} onClose={addCloseModal} />

            <EditRefeicao isOpen={editOpen} onClose={editCloseModal} />

            <RemoveRefeicao id={idSelected} fetchRefeicoes={fetchRefeicoes} isOpen={deleteOpen} onClose={deleteCloseModal} />

            <Footer />
        </div>
    )
}

export default Planejamento;