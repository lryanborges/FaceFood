import './style.css';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import {api} from '../../services/api';
import { Link } from 'react-router-dom';
import React, { useState, useEffect, useContext } from 'react';
import { Context } from '../../context/AuthContext';
import { useParams, useNavigate } from 'react-router-dom';

function Perfil() {
  const [ingredientes, setIngredientes] = useState([]);
  const [pesquisa, setPesquisa] = useState("");
  const { token } = localStorage.getItem("token");

  const [username, setUsername] = useState('');
 const [profilePicture, setProfilePicture] = useState('');
 const [peso, setPeso] = useState('');
 const[altura, setAltura] = useState('');
 const[sexo, setSexo] = useState('');
 const[datanascimento, setDatanascimento] = useState('');
 const[objetivo,setObjetivo] = useState('');
 const[preferenciaalimento, setPreferenciaalimento] = useState('');
 const[preferenciadieta, setPreferenciadieta] = useState('');

 // const profilePicture = "https://pbs.twimg.com/profile_images/1054608902246092802/s_2WNaGB_400x400.jpg"

  const {handleLogout} = useContext(Context);

  useEffect(() => {
    const fetchUserData = async () => {

      setUsername(localStorage.getItem('username'));
      setPeso(localStorage.getItem('peso'));
      setAltura(localStorage.getItem('altura'));
      setObjetivo(localStorage.getItem('objetivo'));
      setPreferenciaalimento(localStorage.getItem('preferenciaalimento'));
      setPreferenciadieta(localStorage.getItem('preferenciadieta'));
      setProfilePicture(localStorage.getItem('foto'));
      setSexo(localStorage.getItem('sexo'));
      setDatanascimento(localStorage.getItem('datanascimento'));

      /*try {
        const response = await fetch('/api/user'); 
        const data = await response.json();
        setUsername(data.username);
        setProfilePicture(data.profilePicture);
      } catch (error) {
        console.log(error);
      }*/
    };

    fetchUserData();
  }, []);
  
  useEffect(() => {
    fetchIngredientes();
  }, []);
  
  const fetchIngredientes = async () => {
    try {
      const response = await api.get("/api/ingrediente");
      setIngredientes(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const openPopup = () => {
    setIsPopupOpen(true);
  };

  const closePopup = () => {
    setIsPopupOpen(false);
  };

const [ingredientesSelecionados, setIngredientesSelecionados] = useState([]);

// ...

const handleIngredientesSelecionados = (event) => {
  const options = event.target.options;
  const selecionados = [];
  for (let i = 0; i < options.length; i++) {
    if (options[i].selected) {
      selecionados.push(options[i].value);
    }
  }
  setIngredientesSelecionados(selecionados);
};

  return (
    <div>
      <Header />
      <div class="ml-8 mt-8">
        <h1 class="text-3xl font-bold c-3D3D3D">Detalhar</h1>
        <h2 class="text-3xl font-light c-FF0038 ml-20">Perfil</h2>
      </div>
      <div class="max-w-lg mx-auto">
        <div class="flex justify-center">
          <img src={require("../../assets/icon-default.jpg")} alt="Foto de perfil" class="w-32 h-32 rounded-full border-2 border-gray-400" />
        </div>
        <div class="mt-6">
          <h2 class="text-3xl font-bold text-gray-800">{}</h2>
          <p class="text-gray-600">@{username}</p>
        </div>
        <div class="mt-6 border-t border-gray-300 pt-6">
          <div class="grid grid-cols-2 gap-4">
            <div>
              <p class="text-gray-700 font-semibold">Altura:</p>
              <p class="text-gray-600">{altura} m</p>
            </div>
            <div>
              <p class="text-gray-700 font-semibold">Sexo:</p>
              <p class="text-gray-600">{sexo}</p>
            </div>
            <div>
              <p class="text-gray-700 font-semibold">Peso:</p>
              <p class="text-gray-600">{peso} kg</p>
            </div>
            <div>
              <p class="text-gray-700 font-semibold">Data Nascimento:</p>
              <p class="text-gray-600">{datanascimento}</p>
            </div>
            <div>
              <p class="text-gray-700 font-semibold">Objetivo:</p>
              <p class="text-gray-600">{objetivo}</p>
            </div>
        <div>
          <p class="text-gray-700 font-semibold">Preferência de dieta:</p>
          <p class="text-gray-600">{preferenciadieta}</p>
        </div>
        <div class="col-span-2">
          <p class="text-gray-700 font-semibold">Preferência de alimentos:</p>
          <p class="text-gray-600">{preferenciaalimento}</p>
        </div>
      </div>
    </div>
  </div>

  <div class="bg-facefoodgreen w-semifull rounded h-0v5 mx-16 mt-16"></div>
  
  <div class="flex justify-center mt-8 mb-8">
    <a onClick={openPopup}
      class="bg-red hover:bg-red-600 text-white font-bold py-2 px-4 rounded mr-4 cursor-pointer">
      Editar Perfil
    </a>
    <Link to="/ingredientes" class="bg-red hover:bg-red-600 text-white font-bold py-2 px-4 rounded mr-4">
      Ingredientes
    </Link>
    <Link to="/pratos" class="bg-red hover:bg-red-600 text-white font-bold py-2 px-4 rounded mr-4">
      Pratos
    </Link>
    <Link to="/publicacoes" class="bg-red hover:bg-red-600 text-white font-bold py-2 px-4 rounded mr-4">
      Publicações
    </Link>
    <Link to="/refeicoes" class="bg-red hover:bg-red-600 text-white font-bold py-2 px-4 rounded mr-4">
      Refeições
    </Link>
    <Link to="/planejamento" class="bg-red hover:bg-red-600 text-white font-bold py-2 px-4 rounded">
      Rotina
    </Link>
  </div>
            <Footer/>
{isPopupOpen && (
  <div id="popup" className="fixed inset-0 flex items-center justify-center">
    <div className="w-full max-w-md mx-auto">
      <div className="bg-white rounded shadow-lg p-4">
        <div className="grid grid-cols-2 gap-4">
          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2" htmlFor="nome">
              Altura:
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="altura"
              type="number"
              placeholder="Altura"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2" htmlFor="objetivo">
              Sexo:
            </label>
            <select
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="sexo"
            >
              {/* Corrigir aqui com a chave key */}
              <option value="Masculino" key="Masculino">
                Masculino
              </option>
              <option value="Feminino" key="Feminino">
                Feminino
              </option>
              <option value="Outro" key="Outro">
                Outro
              </option>
            </select>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2" htmlFor="peso">
              Peso:
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="peso"
              type="number"
              placeholder="peso"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2" htmlFor="peso">
              Data de Nascimento:
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="nascimento"
              type="date"
              placeholder="data de nascimento"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2" htmlFor="objetivo">
              Objetivo:
            </label>
            <select
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="objetivo"
            >
              {/* Corrigir aqui com a chave key */}
              <option value="Ganhar_Peso" key="Ganhar_Peso">
                Ganhar Peso
              </option>
              <option value="Perder_Peso" key="Perder_Peso">
                Perder Peso
              </option>
              <option value="Manter_Peso" key="Manter_Peso">
                Manter Peso
              </option>
            </select>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2" htmlFor="preferenciadieta">
              Preferência de Dieta:
            </label>
            <select
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="preferenciadieta"
            >
              {/* Corrigir aqui com a chave key */}
              <option value="Sem_preferências" key="Sem_preferências">
              Sem preferências
              </option>
              <option value="Vegana" key="Vegana">
              Vegana
              </option>
              <option value="Sem_Lactose" key="Sem Lactose">
              Sem Lactose
              </option>
              <option value="Vegetariana" key="Vegetariana">
              Vegetariana
              </option>
              <option value="Japonesa" key="Japonesa">
              Japonesa
              </option>
              <option value="Chinesa" key="Chinesa">
              Chinesa
              </option>
              <option value="Nordica" key="Nordica">
              Nórdica
              </option>
              <option value="Sem_Glúten" key="Sem_Glúten">
              Sem Glúten
              </option>
              <option value="Reeducação_alimentar" key="Reeducação_alimentar">
              Reeducação alimentar
              </option>
            </select>
          </div>
          <div className="mb-4">
  <label className="block text-gray-700 font-bold mb-2" htmlFor="preferenciaalimentos">
    Preferência de Alimentos:
  </label>
  <select
  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
  id="preferenciaalimentos"
  multiple={true}
  value={ingredientesSelecionados}
  onChange={handleIngredientesSelecionados}
>
  {ingredientes.map((ingrediente) => (
    <option value={ingrediente.id} key={ingrediente.id}>
      {ingrediente.nome}
    </option>
  ))}
</select>
</div>
          {/* Resto dos elementos do formulário */}
          <div className="mb-4 flex items-center justify-between">
            <button className="bg-red text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" onClick={closePopup}>
              Editar
            </button>
            <button className="bg-red text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" onClick={closePopup}>
              Voltar
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
)}
         

        </div>
    );
}

export default Perfil;