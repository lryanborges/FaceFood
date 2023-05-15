
import {BrowserRouter, Route, Routes} from 'react-router-dom'

import Login from '../pages/Login'
import Perfil from '../pages/Perfil'
import NotFound from '../pages/NotFound'
import About from '../pages/About'
import Cadastro from '../pages/Cadastro'

export default function Router(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Login/>} />
                <Route path='/perfil' element={<Perfil/>} />
                <Route path='/cadastro' element={<Cadastro/>}/>
                <Route path="*" element={<NotFound/>} />
            </Routes>
        </BrowserRouter>
    )
}