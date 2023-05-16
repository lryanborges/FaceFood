
import {BrowserRouter, Route, Routes} from 'react-router-dom'

import Login from '../pages/Login'
import Perfil from '../pages/Perfil'
import NotFound from '../pages/NotFound'
import About from '../pages/About'
import Cadastro from '../pages/Cadastro'
import Dashboard from '../pages/Dashboard'
import Homepage from '../pages/Homepage'
import Ingredientes from '../pages/Ingredientes'
import Planejamento from '../pages/Planejamento'
import Pratos from '../pages/Pratos'
import Pesquisas from '../pages/Pesquisas'

export default function Router(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Login/>} />
                <Route path='/perfil' element={<Perfil/>} />
                <Route path='/cadastro' element={<Cadastro/>}/>
                <Route path='/dashboard' element={<Dashboard/>}/>
                <Route path='/ingredientes' element={<Ingredientes/>}/>
                <Route path='/homepage' element={<Homepage/>}/>
                <Route path="*" element={<NotFound/>} />
                <Route path="/planejamento" element={<Planejamento/>}/>
                <Route path="/pratos" element={<Pratos/>}/>
                <Route path="/pesquisas" element={<Pesquisas/>}/>
            </Routes>
        </BrowserRouter>
    )
}