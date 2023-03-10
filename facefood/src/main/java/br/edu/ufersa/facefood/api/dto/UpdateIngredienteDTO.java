package br.edu.ufersa.facefood.api.dto;

import java.util.UUID;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Pattern;
import javax.validation.constraints.Positive;
import javax.validation.constraints.Size;

public class UpdateIngredienteDTO {
	@NotBlank(message = "O nome não pode ser nulo ou vazio!")
	@Size(min = 3, max = 50, message = "O nome deve ter entre 3 e 50 caracteres!")
	private String nome;
	
	@NotNull(message = "O tipo não pode ser nulo ou vazio!")
	private TipoIngrediente tipo;
	
	@NotNull(message = "As calorias não podem ser nulas!")
    @Positive(message = "As calorias devem ser um número positivo!")
	private float calorias;
	
	 private UUID uuid;
	    
	    public UUID getUuid() {
			return uuid;
		}

		public void setUuid(UUID uuid) {
			this.uuid = uuid;
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

	public float getCalorias() {
		return calorias;
	}

	public void setCalorias(float calorias) {
		this.calorias = calorias;
	}

	 public enum TipoIngrediente {
	    	CARNES, PEIXES, FRUTOS_DO_MAR, VEGETAIS, GRÃOS, CEREAIS, FRUTAS, LATICÍNIOS, TEMPEROS, ERVAS, ÓLEOS_E_GORDURAS, NOZES_E_SEMENTES, MASSAS, DOCES_E_SOBREMESAS, BEBIDAS
	    }
}