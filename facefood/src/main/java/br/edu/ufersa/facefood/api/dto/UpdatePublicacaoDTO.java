package br.edu.ufersa.facefood.api.dto;

import java.util.UUID;

import br.edu.ufersa.facefood.domain.entity.Prato;

public class UpdatePublicacaoDTO {

	private long id;
	private Prato prato;
	private String descricao;
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
	public UUID getUuid() {
		return uuid;
	}
	public void setUuid(UUID uuid) {
		this.uuid = uuid;
	}
	
}
