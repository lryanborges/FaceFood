import React, { Component } from 'react';
import './App.css';
import Ingredientes from './pages/Ingredientes';
import Login from './pages/Login';
import Router from './routes';
import { AuthProvider } from './context/AuthContext';

class App extends Component {
  render() {
    const TipoIngrediente = ["Carnes", "Peixes", "Frutos do Mar", "Vegetais", "Grãos", "Cereais", "Frutas", "Laticínios", "Temperos", "Ervas", "Óleos e Gorduras", "Nozes e Sementes", "Massas", "Doces e Sobremesas", "Bebidas"];

    const ingredientes = [{ nome: 'Tomate', tipo: TipoIngrediente[3], calorias: 20 },
    { nome: 'Arroz', tipo: TipoIngrediente[5], calorias: 130 },
    { nome: 'Cebola', tipo: TipoIngrediente[3], calorias: 40 },
    { nome: 'Carne de frango', tipo: TipoIngrediente[0], calorias: 200 },
    { nome: 'Feijão', tipo: TipoIngrediente[5], calorias: 120 },
    { nome: 'Salmão', tipo: TipoIngrediente[1], calorias: 180 },
    { nome: 'Espinafre', tipo: TipoIngrediente[3], calorias: 20 },
    { nome: 'Queijo cheddar', tipo: TipoIngrediente[7], calorias: 110 },
    { nome: 'Azeite de oliva', tipo: TipoIngrediente[10], calorias: 120 },
    { nome: 'Amêndoas', tipo: TipoIngrediente[11], calorias: 160 },
    ];

    return (
      <Router />
    );
  }
}

export default App;
