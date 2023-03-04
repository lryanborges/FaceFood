package br.edu.ufersa.facefood.domain.entity;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.Entity;
import javax.persistence.Table;

public class Prato extends Ingrediente {
	private List<Ingrediente> listaIngredientes = new ArrayList<Ingrediente>();
	private int idDoCriador;
	
	public List<Ingrediente> getListaIngredientes() {
		return listaIngredientes;
	}
	public void setListaIngredientes(List<Ingrediente> listaIngredientes) {
		this.listaIngredientes = listaIngredientes;
	}
	public int getIdDoCriador() {
		return idDoCriador;
	}
	public void setIdDoCriador(int idDoCriador) {
		this.idDoCriador = idDoCriador;
	}
}
