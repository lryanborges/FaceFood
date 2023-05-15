import React from 'react';
import './style.css'

function Header(){
    return(
        <header className="bg-FFF9F4 text-3D3D3D flex items-center justify-between shadow px-8 py-6">
<a href="dashboard.html">
<img  alt="FaceFood" width="80%" />
</a>
<div className="flex items-center">
<button className="md:hidden">
<svg viewBox="0 0 20 20" fill="currentColor" className="w-6 h-6">
<path
           fillRule="evenodd"
           d="M3 4h14a1 1 0 010 2H3a1 1 0 010-2zm0 6h14a1 1 0 010 2H3a1 1 0 110-2zm14 5H3a1 1 0 110-2h14a1 1 0 110 2z"
           clipRule="evenodd"
         />
</svg>
</button>
<div className="ml-4 flex items-center">
<img  alt="Imagem de perfil" className="w-10 h-10 rounded-full" />
<div className="ml-2 font-poppins font-medium text-sm text-3D3D3D flex items-center">
<a href="../dist/detalhar-perfil.html">João Sales</a>
</div>
</div>
<button className="ml-4">
<a href="/login">
<img  alt="Botão" className="w-10 h-10" />
</a>
</button>
</div>
</header>
    );
}

export default Header;