import React,{ Component } from "react";
import './style.css';
import IngredientesBody from "../../components/IngredientesBody";
import IngredientesHeader from "../../components/IngredientesHeader";

class Ingredientes extends Component{
    render(){
    const {Ingredientes} = this.props
        return(
                <table class="table-auto w-full mx-auto max-w-screen-xl mb-10">
                    
                    <IngredientesHeader/>
                    <IngredientesBody osingredientes = {Ingredientes}/>
  
  </table>
        )
    }
}

export default Ingredientes;