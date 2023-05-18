package br.edu.ufersa.facefood.api.dto;

import java.util.Date;

import javax.validation.constraints.Email;
import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;



public class InsertUserDTO {
	@NotEmpty(message="Não é permitido um email vazio!!!")
	@Email(message="Digite um email valido!!!")
	private String email;
	@Size(min=5,max=200,message="A senha deve ter entre 5 e 200 caracteres!!!")
	@NotNull
	private String senha;
	
	private String objetivo;
	
	private String sexo;
	
	private Date datanascimento;
	
	private String preferenciadieta;
	
	private String preferenciaalimento;
	
	
	
	private float altura;
	
	private float peso;

	private String foto;
	
	
	
	public String getObjetivo() {
		return objetivo;
	}
	public void setObjetivo(String objetivo) {
		this.objetivo = objetivo;
	}
	public String getSexo() {
		return sexo;
	}
	public void setSexo(String sexo) {
		this.sexo = sexo;
	}
	public Date getDatanascimento() {
		return datanascimento;
	}
	public void setDatanascimento(Date datanascimento) {
		this.datanascimento = datanascimento;
	}
	public String getPreferenciadieta() {
		return preferenciadieta;
	}
	public void setPreferenciadieta(String preferenciadieta) {
		this.preferenciadieta = preferenciadieta;
	}
	public String getPreferenciaalimento() {
		return preferenciaalimento;
	}
	public void setPreferenciaalimento(String preferenciaalimento) {
		this.preferenciaalimento = preferenciaalimento;
	}
	public String getFoto() {
		return foto;
	}
	public void setFoto(String foto) {
		this.foto = foto;
	}
	public float getAltura() {
		return altura;
	}
	public void setAltura(float altura) {
		this.altura = altura;
	}
	public float getPeso() {
		return peso;
	}
	public void setPeso(float peso) {
		this.peso = peso;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public String getSenha() {
		return senha;
	}
	public void setSenha(String senha) {
		this.senha = senha;
	}
	
}