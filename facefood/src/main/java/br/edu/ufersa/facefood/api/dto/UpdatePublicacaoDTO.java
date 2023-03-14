package br.edu.ufersa.facefood.api.dto;

import java.util.UUID;

import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;

import br.edu.ufersa.facefood.domain.entity.Prato;
import br.edu.ufersa.facefood.domain.entity.User;

public class UpdatePublicacaoDTO {

	private long id;
	@NotNull(message = "Por favor, informe o prato da publicacação.")
	private Prato prato;
	@Size(max=300, message="A descrição pode ter no máximo 300 caracteres!")
	private String descricao;
	@NotNull(message = "Por favor, informe o usuário autor do prato.")
	private User user;
	private UUID uuid;
	
	public long getId() {
		return id;
	}
	public void setId(long id) {
		this.id = id;
	}
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
	public UUID getUuid() {
		return uuid;
	}
	public void setUuid(UUID uuid) {
		this.uuid = uuid;
	}
	
}
