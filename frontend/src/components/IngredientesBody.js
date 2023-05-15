import React, {Component} from "react";

const IngredientesBody = (props) => {
    const rows = props.osingredientes.map((row,index) => {
        return(
           
            <template>
              <tr>
                <td class="border px-6 py-2"></td>
                <td class="border px-6 py-2"></td>
                <td class="border px-6 py-2"></td>
                <td class="border px-6 py-2">
                  <button
                    class="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mr-2 btn-editar">Editar</button>
                  <button class="bg-red hover:bg-red-700 text-white font-bold py-2 px-4 rounded btn-excluir">Excluir</button>
                </td>
              </tr>
            </template>
         
        )
    })

    return (
        <tbody>
            {rows}
            </tbody>
    )
   
}

export default IngredientesBody;