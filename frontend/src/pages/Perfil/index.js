import './style.css';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

function Perfil(){
  const {id} = useParams()
  const navigate = useNavigate()

  useEffect(() => {
    setTimeout(() =>{
      navigate('/')
    },2000)
  })
    return(
        <div>
            <Header />
            <h1>Home</h1>
            <img src={`https://github.com/${id}.png`} alt="ddd"/>
            <Footer/>
        </div>
    );
}

export default Perfil;