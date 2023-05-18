package br.edu.ufersa.facefood.api.dto;

import java.util.List;
import java.util.UUID;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Positive;
import javax.validation.constraints.Size;

import br.edu.ufersa.facefood.domain.entity.Ingrediente;
import br.edu.ufersa.facefood.domain.entity.User;

public class PratoDTO {

	private long id;
	@NotBlank(message = "Por favor, informe um nome válido.")
	private String nome;
	@Positive(message = "Por favor, informe as calorias como um número positivo.")
	private float calorias;
	@Size(max = 200, message = "Limite máximo de caracteres para a descrição: 200")
	private String descricao;
	@NotNull(message = "Por favor, informe os tipos do prato.")
	private List<String> tipos;
	@NotNull(message = "Por favor, informe os ingredientes do prato.")
	private List<Ingrediente> ingredientes;
	@NotNull(message = "Por favor, informe o usuário autor do prato.")
	private User user;
	private UUID uuid;
	@NotNull(message = "Por favor, insira o URL da imagem.")
	private String imgUrl;
	@NotEmpty(message = "Por favor, insira o modo de preparo.")
	private String modoDePreparo;
	@Positive(message = "O tempo deve ser positivo!")
	private int tempoDePreparo;
	public String getModoDePreparo() {
		return modoDePreparo;
	}
	public void setModoDePreparo(String modoDePreparo) {
		this.modoDePreparo = modoDePreparo;
	}
	public int getTempoDePreparo() {
		return tempoDePreparo;
	}
	public void setTempoDePreparo(int tempoDePreparo) {
		this.tempoDePreparo = tempoDePreparo;
	}
	public long getId() {
		return id;
	}
	public void setId(long id) {
		this.id = id;
	}
	public String getNome() {
		return nome;
	}
	public void setNome(String nome) {
		this.nome = nome;
	}
	public float getCalorias() {
		return calorias;
	}
	public void setCalorias(float calorias) {
		this.calorias = calorias;
	}
	public String getDescricao() {
		return descricao;
	}
	public void setDescricao(String descricao) {
		this.descricao = descricao;
	}
	public List<String> getTipos() {
		return tipos;
	}
	public void setTipos(List<String> tipos) {
		this.tipos = tipos;
	}
	public List<Ingrediente> getIngredientes() {
		return ingredientes;
	}
	public void setIngredientes(List<Ingrediente> ingredientes) {
		this.ingredientes = ingredientes;
	}
	public User getUser() {
		return user;
	}
	public void setUser(User user) {
		this.user = user;
	}
	public UUID getUuid() {
		return uuid;
	}
	public void setUuid(UUID uuid) {
		this.uuid = uuid;
	}
	public String getImgUrl() {
		return imgUrl;
	}
	public void setImgUrl(String imgUrl) {
		this.imgUrl = imgUrl;
	}
	
	public String toString() {
		String retornar = "uuid: " + uuid + "\nnome: " + nome + "\ndescricao: " + descricao + "\ncalorias: " + calorias;
		retornar = retornar + "\nLista de ingredientes: ";
		int i = 0;
		for(Ingrediente ig : ingredientes) {
			retornar = "\nIngr" + i++ + ": " + ig; 
		}
		int j = 0;
		for(String tp : tipos) {
			retornar = "\nTipo" + j++ + tp.indexOf(j);
		}
		return retornar;
	}
	
}
