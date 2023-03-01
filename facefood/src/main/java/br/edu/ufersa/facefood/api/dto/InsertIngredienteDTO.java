package br.edu.ufersa.facefood.api.dto;

import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Pattern;
import javax.validation.constraints.Size;

public class InsertIngredienteDTO {
	
	@NotNull(message="As calorias não podem ser nulas!!!")
	private float calorias;
	
	@NotEmpty(message = "O nome do ingrediente não pode estar vazio")
	@Size(min=3, max=50, message="O nome do ingrediente deve ter entre 3 e 50 caracteres")
	private String nome;
	
	@NotNull(message = "O tipo do ingrediente não pode ser nulo")
	private TipoIngrediente tipo;
	
	public float getCalorias() {
		return calorias;
	}
	
	public void setCalorias(float calorias) {
		this.calorias = calorias;
	}
	
	public String getNome() {
		return nome;
	}
	
	public void setNome(String nome) {
		this.nome = nome;
	}
	
	public TipoIngrediente getTipo() {
		return tipo;
	}
	
	public void setTipo(TipoIngrediente tipo) {
		this.tipo = tipo;
	}

	public enum TipoIngrediente {
		CARNES,
		PEIXES,
		FRUTOS_DO_MAR,
		VEGETAIS,
		GRÃOS,
		CEREAIS,
		FRUTAS,
		LATICÍNIOS,
		TEMPEROS,
		ERVAS
	}
}
