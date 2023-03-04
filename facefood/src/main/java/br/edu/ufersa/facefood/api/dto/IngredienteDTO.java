package br.edu.ufersa.facefood.api.dto;

//import br.edu.ufersa.facefood.api.dto.IngredienteDTO.TipoIngrediente;

public class IngredienteDTO {
	private long id;
	private float calorias;
    private String nome;
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