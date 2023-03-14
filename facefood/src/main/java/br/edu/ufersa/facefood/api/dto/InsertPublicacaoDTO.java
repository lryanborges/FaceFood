package br.edu.ufersa.facefood.api.dto;

import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;

import br.edu.ufersa.facefood.domain.entity.Prato;
import br.edu.ufersa.facefood.domain.entity.User;

public class InsertPublicacaoDTO {

	@NotNull(message = "Por favor, informe o prato da publicacação.")
	private Prato prato;
	@Size(max=300, message="A descrição pode ter no máximo 300 caracteres!")
	private String descricao;
	@NotNull(message = "Por favor, informe o usuário autor do prato.")
	private User user;
	
	public Prato getPrato() {
		return prato;
	}
	public void setPrato(Prato prato) {
		this.prato = prato;
	}
	public String getDescricao() {
		return descricao;
	}
	public void setDescricao(String descricao) {
		this.descricao = descricao;
	}
	public User getUser() {
		return user;
	}
	public void setUser(User user) {
		this.user = user;
	}
	
}
