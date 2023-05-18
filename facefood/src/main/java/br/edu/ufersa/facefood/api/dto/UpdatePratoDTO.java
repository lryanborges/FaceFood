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

public class UpdatePratoDTO {

	@NotBlank(message = "Por favor, informe um nome válido.")
	private String nome;
	@NotNull(message = "Por favor, informe as calorias do prato.")
	private float calorias;
	@Size(max = 200, message = "Limite máximo de caracteres para a descrição: 200")
	private String descricao;
	@NotNull(message = "O prato deve pertecer a pelo menos uma categoria.")
	private List<String> tipos;
	@NotNull(message = "O prato deve haver pelo menos um ingrediente.")
	private List<Ingrediente> ingredientes;
	@NotNull(message = "Você precisa informar o autor do prato(user).")
	private User user;
	private UUID uuid;
	@NotEmpty(message = "Por favor, insira o URL da imagem.")
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
	public String getImgUrl() {
		return imgUrl;
	}
	public void setImgUrl(String imgUrl) {
		this.imgUrl = imgUrl;
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
	
}
