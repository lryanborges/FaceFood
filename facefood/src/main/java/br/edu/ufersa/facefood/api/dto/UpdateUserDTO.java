package br.edu.ufersa.facefood.api.dto;

import java.util.UUID;

import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Size;

public class UpdateUserDTO {
	@NotBlank(message="O email não pode ser null ou vazio!")
    @Email(message="Digite um email valido!!!")
    private String email;
    @NotBlank(message="A senha não pode ser null ou vazia!")
    @Size(min=5,max=200,message="A senha deve ter entre 5 e 200 caracteres!!!")
    private String senha;
    private UUID uuid;
    
	private float altura;
	
	private float peso;
	
	
    
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

	public UUID getUuid() {
		return uuid;
	}

	public void setUuid(UUID uuid) {
		this.uuid = uuid;
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