package br.edu.ufersa.facefood.api.dto;

import javax.validation.constraints.Email;
import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;



public class InsertUserDTO {
	@NotEmpty(message="Não é permitido um email vazio!!!")
	@Email(message="Digite um email valido!!!")
	private String email;
	@Size(min=5,max=20,message="A senha deve ter entre 5 e 20 caracteres!!!")
	@NotNull
	private String senha;
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