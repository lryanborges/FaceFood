package br.edu.ufersa.facefood.api.dto;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Pattern;
import javax.validation.constraints.Size;

public class UpdateIngredienteDTO {
	@NotBlank(message = "O nome não pode ser nulo ou vazio!")
	@Size(min = 3, max = 50, message = "O nome deve ter entre 3 e 50 caracteres!")
	private String nome;
	
	@NotNull(message = "O tipo não pode ser nulo ou vazio!")
	private TipoIngrediente tipo;
	
	@NotNull(message = "As calorias não podem ser nulas ou vazias!")
	@Pattern(regexp = "^\\d+(\\.\\d{1,2})?$", message = "As calorias devem ser um número positivo com até 2 casas decimais!")
	private String calorias;
	private long id;
	
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

	public String getCalorias() {
		return calorias;
	}

	public void setCalorias(String calorias) {
		this.calorias = calorias;
	}

	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
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