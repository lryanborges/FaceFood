import React, {Component} from "react";

const IngredientesHeader = () => {
    return(
        <thead>
        <tr>
          <th class="px-6 py-2">Nome</th>
          <th class="px-6 py-2">Tipo</th>
          <th class="px-6 py-2">Calorias</th>
          <th class="px-6 py-2">Ações</th>
        </tr>
      </thead>
    )
}

export default IngredientesHeader;